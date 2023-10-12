import  express  from "express";
// import { signupUser } from "../Controller/user_controller.js";
import { singupUser } from "../Controller/user_controller.js";

const router = express.Router();

router.post('/signup', singupUser);

export default router;