import { https } from 'firebase-functions';
import * as express from 'express';
import FbRoutes from './facebook';
import StripeRoutes from './stripe';
const Sentry = require('@sentry/node');

Sentry.init({ dsn: 'https://37c553e6cb9c4d7b91443519ccd448a9@sentry.io/1514998' });

const cors = require('cors');

const app = express();
app.use(cors({ origin: true }));
app.use('/facebook', FbRoutes);
app.use('/stripe', StripeRoutes);

exports.function = https.onRequest(app);
