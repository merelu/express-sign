import UserController from "./api/user/user.controllers";
import App from "./app";
import sequelizeConnection from "./db/config";

async function startServer() {
  sequelizeConnection
    .authenticate()
    .then(() => {
      console.log("sequelize connect success");
    })
    .catch((e) => {
      console.log("sequelize not connect");
    });
  const app = new App([new UserController()]);

  app.listen();
}

startServer();
