import databaserService from "./config/databaserService.js";
import routing from "./framworks/web/routing.js";
import Express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import ErrorHandler from "./framworks/common/ErrorHandler.js";

const app = Express();
const port = 3000;

databaserService().service.started();
const running = () => {
  try {
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use("/user", routing(databaserService().service));
    app.use(ErrorHandler);
    app.listen(port, () => console.log(`Running at ${port}`));
  } catch (err) {
    console.log(`db service is not ready, err:${err.message}`);
  }
};

running();
