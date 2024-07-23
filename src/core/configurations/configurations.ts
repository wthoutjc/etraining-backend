import { ConfigModuleOptions, registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export interface IConfig {
  secretKey: string;
  jwtExpiresIn: string;
  databaseUrl: string;
}

const configurations = registerAs(
  'configEnvs',
  (): IConfig => ({
    secretKey: process.env.SECRET_KEY,
    jwtExpiresIn: process.env.TOKEN_EXPIRATION,
    databaseUrl: process.env.DATABASE,
  }),
);

export default configurations;

export function configRoot(): ConfigModuleOptions {
  return {
    load: [configurations],
    isGlobal: true,
    validationSchema: Joi.object({
      SECRET_KEY: Joi.string().required(),
      TOKEN_EXPIRATION: Joi.string().required(),
      DATABASE_URL: Joi.string().required(),
    }),
  };
}
