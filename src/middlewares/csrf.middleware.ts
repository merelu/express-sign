import Tokens from "csrf";
import { Handler } from "express";

export const CSRF_TOKEN_HEADEr = "x-csrf-token";

const ignorePaths = ["/api"];
const tokens = new Tokens();

export const csrf = (): Handler => (req, res, next) => {
  next();
};
