import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { filmHandler } from '../controllers/filmHandler';

export async function filmRoutes(
  app: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void
) {
  app.get('/films/:id/characters', {}, filmHandler);

  done();
}

module.exports = filmRoutes;
