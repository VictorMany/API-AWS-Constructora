import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { OK } from 'http-status-codes';
import { respond } from './utils/response';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/api/node-js-express-template/hello', (req, res) => {
  respond(res, OK, {
    hello: 'world'
  });
});

export default app;