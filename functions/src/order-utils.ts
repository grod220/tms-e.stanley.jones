const normalMenu = require("../../src/components/shared/normalMenuData")
  .default;
const cateringMenu = require("../../src/components/shared/cateringMenuData")
  .default;

const formatDescription = choices =>
  Object.values(choices)
    .reduce((acc, curr) => acc.concat(curr), [])
    .map(obj => (obj.extra ? `${obj.name} (+$${obj.extra})` : obj.name))
    .join(" - ");

const formatCart = (shoppingCart, tip, tax, deliveryFee) => {
  const line_items = shoppingCart.map(item => {
    const lineItem = {
      name: item.dishName,
      amount: Math.round(item.total * 100),
      currency: "usd",
      quantity: 1
    };

    if (formatDescription(item.choices)) {
      lineItem.description = formatDescription(item.choices);
    }
    return lineItem;
  });

  line_items.push({
    name: "Tax",
    amount: parseInt(tax * 100),
    currency: "usd",
    quantity: 1
  });

  if (deliveryFee) {
    line_items.push({
      name: "Delivery Fee",
      amount: parseInt(deliveryFee * 100),
      currency: "usd",
      quantity: 1
    });
  }

  if (tip) {
    line_items.push({
      name: "Tip",
      description: "Thank you! 💙",
      amount: parseInt(tip * 100),
      currency: "usd",
      quantity: 1
    });
  }

  return line_items;
};

const formatPaymentIntentObj = reqBody => {
  const metaDataObj = {
    order_type: reqBody.orderType,
    contact_name: reqBody.contactName,
    fulfillment_time: reqBody.fulfillmentTime,
    fulfillment_date: reqBody.fulfillmentDate,
    contact_number: reqBody.contactNumber,
    special_instructions: reqBody.specialInstructions,
    fulfillment_option: reqBody.fulfillmentOption
  };

  reqBody.shoppingCart
    .map(item => {
      if (formatDescription(item.choices)) {
        return `${item.dishName} (${formatDescription(item.choices)})`;
      } else {
        return item.dishName;
      }
    })
    .forEach((item, index) => {
      metaDataObj[`Item ${index + 1}`] = item;
    });

  const paymentIntentObj = {
    metadata: metaDataObj
  };

  if (
    reqBody.orderType === "catering" &&
    reqBody.fulfillmentOption === "delivery"
  ) {
    paymentIntentObj.shipping = {
      address: { line1: reqBody.deliveryLocation },
      name: reqBody.contactName
    };
    metaDataObj.number_of_guests = reqBody.numberOfGuests;
  }
  return paymentIntentObj;
};

const validateOrderOrThrow = ({
  shoppingCart,
  orderType,
  tip,
  tax,
  deliveryFee,
  fulfillmentOption
}) => {
  console.log(
    JSON.stringify({
      shoppingCart,
      orderType,
      tip,
      tax,
      deliveryFee,
      fulfillmentOption
    })
  );
  if (tip < 0) {
    throw Error(`Tip is less than 0 zero`);
  }

  if (fulfillmentOption === "delivery" && deliveryFee < 20) {
    throw Error("Delivery fee is less than $20");
  }

  let orderSubTotal = 0;

  const menuItems = (orderType === "catering" ? cateringMenu : normalMenu)
    .map(group => group.items)
    .reduce((acc, itemArr) => acc.concat(itemArr), []);

  shoppingCart.forEach(cartItem => {
    const matchingMenuItem = menuItems.find(
      menuItem => menuItem.name === cartItem.dishName
    );

    if (!matchingMenuItem) {
      throw Error(
        `${cartItem.name} :: Could not find this dish in the official menu`
      );
    }

    if (cartItem.basePrice !== matchingMenuItem.price) {
      throw Error(
        `${cartItem.name} :: basePrice doesn't match on client & server`
      );
    }
    let menuExtras = 0;
    if (cartItem.choices) {
      Object.entries(cartItem.choices).forEach(([optionName, choicesArr]) => {
        const matchingOptionObj = matchingMenuItem.options.find(
          optionObj => optionObj.name === optionName
        );
        choicesArr.forEach(({ name, extra }) => {
          const matchingChoiceItem = matchingOptionObj.choices.find(
            choice => choice.name === name
          );
          if (matchingChoiceItem.extra) {
            menuExtras += matchingChoiceItem.extra;
          }
          if (extra !== matchingChoiceItem.extra) {
            throw Error(
              `Choice: ${name} :: extraPrice doesn't match on client & server`
            );
          }
        });
      });
    }
    const menuItemTotal = matchingMenuItem.price + menuExtras;
    if (cartItem.total !== menuItemTotal) {
      throw Error(`${cartItem} :: total doesn't match on client & server`);
    }

    orderSubTotal += menuItemTotal;
  });

  if (Math.floor(tax) !== Math.floor(orderSubTotal * 0.07)) {
    throw Error(`Tax doesn't match on client & server`);
  }
};

module.exports = {
  formatCart,
  formatPaymentIntentObj,
  validateOrderOrThrow
};
