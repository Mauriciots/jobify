import express from 'express';
import { register, login, updateUser } from "../controllers/authController.js";

const authRoute = express.Router();

authRoute.route('/register').post(register);
authRoute.route('/login').post(login);
authRoute.route('/updateUser').patch(updateUser);

export default authRoute;