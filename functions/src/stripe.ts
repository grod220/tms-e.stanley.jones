import { config, Request, Response } from 'firebase-functions';
import * as express from 'express';
import { formatCart, formatPaymentIntentObj, validateOrderOrThrow } from './order-utils';
const bodyParser = require('body-parser');
import Stripe from 'stripe';
import * as Sentry from '@sentry/node';

const STRIPE_SECRET = config().secrets.stripe_prod_secret;
// const STRIPE_SECRET = config().secrets.stripe_dev_secret;
const stripe = new Stripe(STRIPE_SECRET, { apiVersion: '2020-03-02' });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/order', async (req: Request, res: Response) => {
  try {
    validateOrderOrThrow(req.body);

    const sessionObj = {
      payment_method_types: ['card' as Stripe.Checkout.SessionCreateParams.PaymentMethodType],
      line_items: formatCart(req.body.shoppingCart, req.body.tip, req.body.tax, req.body.deliveryFee),
      success_url: 'https://www.themeatballstoppe.com/order/success',
      cancel_url: 'https://www.themeatballstoppe.com/order/cancelled',
      payment_intent_data: formatPaymentIntentObj(req.body),
    };

    const stripeSession = await stripe.checkout.sessions.create(sessionObj);
    res.json(stripeSession);
  } catch (e) {
    Sentry.captureException(e);
    res.status(500).json({ error: e.toString() });
  }
});

export default app;
