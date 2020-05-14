import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';

import OrderNav from './order-nav';
import OrderMenu from './order-menu';
import OrderStore from './stores/order-store';
import Checkout from './checkout';
import { getNextAvailableFulfillmentDateStr, getNextAvailableFulfillmentTimeStr } from './stores/date-utils';

const initializeModule = (catering) => {
  if ((catering && OrderStore.orderType !== 'catering') || (!catering && OrderStore.orderType !== 'normal')) {
    OrderStore.shoppingCart = []; // clear cart
  }
  if (catering) {
    OrderStore.orderType = 'catering';
    OrderStore.fulfillmentOption = 'delivery';
  } else {
    OrderStore.orderType = 'normal';
    OrderStore.fulfillmentOption = 'pickup';
  }
  OrderStore.activeTab = 'Full menu';
  OrderStore.dateStore.fulfillmentDate = getNextAvailableFulfillmentDateStr();
  OrderStore.dateStore.fulfillmentTime = getNextAvailableFulfillmentTimeStr();
};

const OrderApp = observer(({ catering }) => {
  useEffect(() => initializeModule(catering), [catering]);

  return (
    <>
      <OrderNav />
      {OrderStore.activeTab && (OrderStore.activeTab === 'Checkout' ? <Checkout /> : <OrderMenu />)}
    </>
  );
});

export default OrderApp;
