import envSchema from 'env-schema';
import { Type, Static } from '@sinclair/typebox';

const schema = Type.Object({
  // The port to listen on
  PORT: Type.Number({
    default: 5000,
  }),
  // The host to listen on
  Host: Type.String({
    default: '0.0.0.0',
  }),

  DATABASE_URL: Type.String(),
});

type Env = Static<typeof schema>;

export const config = envSchema<Env>({
  schema,
  dotenv: true,
});
