import { https } from 'firebase-functions';
import * as express from 'express';
import FbRoutes from './facebook';

const cors = require('cors');

const app = express();
app.use(cors({ origin: true }));
app.use('/facebook', FbRoutes);

exports.function = https.onRequest(app);
