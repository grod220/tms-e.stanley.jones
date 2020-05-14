import { config, Request, Response } from 'firebase-functions';
import * as express from 'express';
const bodyParser = require('body-parser');
const Utils = require('./order-utils');

const STRIPE_SECRET = config().secrets.stripe_prod_secret || process.env.STRIPE_PROD_SECRET;
// const STRIPE_SECRET = process.env.STRIPE_DEV_SECRET;
const stripe = require('stripe')(STRIPE_SECRET);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/order', async (req: Request, res: Response) => {
  try {
    Utils.validateOrderOrThrow(req.body);

    const sessionObj = {
      payment_method_types: ['card'],
      line_items: Utils.formatCart(req.body.shoppingCart, req.body.tip, req.body.tax, req.body.deliveryFee),
      success_url: 'https://www.themeatballstoppe.com/order/success',
      cancel_url: 'https://www.themeatballstoppe.com/order/cancelled',
      payment_intent_data: Utils.formatPaymentIntentObj(req.body),
    };

    const stripeSession = await stripe.checkout.sessions.create(sessionObj);
    res.json(stripeSession);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

export default app;
