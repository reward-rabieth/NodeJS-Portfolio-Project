import axios from 'axios';
import { FastifyReply, FastifyRequest } from 'fastify';

import mongoose, { Schema } from 'mongoose';

import { logger } from '../../../utils/logger';
// import { createComment } from '../services/commentservice';
// import { createSchemaBody } from '../schema/commentSchema';

export async function getFilmIdHandler(request: any, reply: any) {
  try {
    const contents = `https://swapi.dev/api/films/?format=json`;

    const { data } = await axios.get(contents);
    const results = data.results;
    const filmId = results.map((film: any) => {
      return film.episode_id;
    });

    //converting the film id to a string
    const filmIdString = filmId.toString();

    if (filmIdString.includes(request.params.id)) {
      const ip = await request.ip;

      //use the schema to create a comment
      const commentSchema = new Schema({
        id: Number,
        text: String,
        User_Ip_address: String,
        createdAt: Date,
      });
      
      const commentData = mongoose.model('Comment', commentSchema);
      
      const filmModel = new commentData({
        id: request.params.id,
        text: request.body.text,
        User_Ip_address: ip,
        createdAt: new Date(),
      });
     
      filmModel.save();

      return reply.send(filmModel);
      //send the response
    } else {
      return reply.code(404).send('film is not available ');
    }
  } catch (e) {
    logger.error(e, 'getFilmId:error from getting film id');
    return reply.code(400).send({ message: 'Error from getting film id' });
  }
}
