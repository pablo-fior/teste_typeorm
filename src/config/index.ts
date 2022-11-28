import { createHash } from "crypto";
import { config } from "dotenv";

const envfile = `.env.${process.env.NODE_ENV}`;
const envdir = process.cwd();

config({ path: `${envdir}/${envfile}` });

export const server = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
};

export const auth = {
  secret: String(process.env.JWT_SECRET),
  expiresIn: '1h',
}

export const hash = (text: string) => {
  return createHash('sha256').update(text).digest('hex');
}