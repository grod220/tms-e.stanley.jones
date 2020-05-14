import { https } from 'firebase-functions';
import * as express from 'express';
import FbRoutes from './facebook';
import StripeRoutes from './stripe';

const cors = require('cors');

const app = express();
app.use(cors({ origin: true }));
app.use('/facebook', FbRoutes);
app.use('/stripe', StripeRoutes);

exports.function = https.onRequest(app);
