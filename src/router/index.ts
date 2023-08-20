import express from 'express';

import authentication from './authentication.js';
import users from './users.js';
import health from './health.js';

const router = express.Router();

export default (): express.Router => {
  health(router);
  authentication(router);
  users(router);

  return router;
};
