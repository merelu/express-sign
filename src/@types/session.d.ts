import { MemoryStore } from "express-session";

declare module "express-session" {
  interface SessionData {
    email?: string;
    csrfSecret?: string;
    csrfToken?: string;
  }
}

declare module "express" {
  interface Request {
    sessionStore: MemoryStore;
  }
}
