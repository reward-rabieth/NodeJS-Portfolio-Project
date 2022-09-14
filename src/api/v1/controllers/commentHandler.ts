import { logger } from '@typegoose/typegoose/lib/logSettings';

export async function commentHandler(request: any, reply: any) {
  try {
    const id = request.params.id;
    const sourceIp = request.ip;
    const comment = request.body.comment;

    //check if id exist

    if (id === id) {
      reply.status(201).send({
        User_IP: sourceIp,
        Comment: comment,
        createdAt: new Date(),
      });
    } else {
      reply.status(400).send({ message: 'Film id does not exist' });
    }
  } catch (e) {
    logger.error(e, 'commentHandler:error from posting comment');
    reply.code(400).send({ message: 'Error from posting comment' });
  }
}
