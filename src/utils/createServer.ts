import fastify from 'fastify';

export async function createServer() {
  const app = fastify();

  //register createRoutes
  app.register(require('../api/v1/routes/filmroute'));

  return app;
}
