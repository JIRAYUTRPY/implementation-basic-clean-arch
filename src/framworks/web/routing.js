import Express from "express";
import userController from "../../controllers/userController.js";

export default (databaserService) => {
  const router = Express.Router();
  const controller = userController(databaserService);
  router.route("/").post(controller.addNewUser);
  return router;
};
