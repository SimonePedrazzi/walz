import express from 'express';

export default (router: express.Router) => {
  router.get('/health', async (req: express.Request, res: express.Response) => {
    return res.status(200).json({ message: 'ok' }).end();
  });
};
