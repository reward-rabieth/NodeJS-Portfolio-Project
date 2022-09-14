import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { characterHandler } from '../controllers/characterHandler';
import { commentHandler } from '../controllers/commentHandler';
import { filmHandler } from '../controllers/filmHandler';

export async function filmRoutes(
  app: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void
) {
  app.get('/films/:id/characters', {}, characterHandler);
  app.get('/films/:id', {}, filmHandler);
  app.post('/films/:id/comments', {}, commentHandler);

  done();
}

module.exports = filmRoutes;
