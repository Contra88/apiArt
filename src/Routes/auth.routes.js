import { Router } from "express";
import { loginCtrl, registerCtrl } from "../controllers/authController.js";

const authRouter = Router();

//*RUTAS
authRouter.post("/register", registerCtrl);
authRouter.post("/login", loginCtrl);

export default authRouter;
