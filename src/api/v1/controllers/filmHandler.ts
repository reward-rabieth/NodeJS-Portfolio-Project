import axios from 'axios';
import { logger } from '../../../utils/logger';
export async function filmHandler(request: any, reply: any) {
  try {
    const Id = request.params.id;
    const contents = `https://swapi.dev/api/films/${Id}/?format=json`;

    const { data } = await axios.get(contents);

    //get film that contain opening_crawl
    const film = data.opening_crawl;

    //comment count
    const commentCount = data.comment_count;
    console.log(commentCount);

    const filmData = [
      {
        title: data.title,
        opening_crawl: film,

        comment_count: commentCount,
      },
    ];
    reply.send(filmData);
  } catch (e) {
    logger.error(e, 'createFilmHandler:error from getting film');
    return reply.code(400).send({ message: 'Error from getting film' });
  }
}
