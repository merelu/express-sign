import App from "./app";
import dbInit from "./db/init";

async function startServer() {
  dbInit();
  const app = new App([]);

  app.listen();
}

startServer();
