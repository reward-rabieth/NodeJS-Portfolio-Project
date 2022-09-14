import mongoose from 'mongoose';

import { config } from './config';
import { logger } from './logger';

export async function connectToDb() {
  try {
    await mongoose.connect(config.DATABASE_URL);

    logger.info('connected to database');
    //create collection called comments
  } catch (error) {
    logger.info(error);

    process.exit(1);
  }
}
