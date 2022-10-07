import Express from "express";
import userController from "../controllers/userController.js";

const router = Express.Router();

router.route("/").get(userController.list);

export default router;
