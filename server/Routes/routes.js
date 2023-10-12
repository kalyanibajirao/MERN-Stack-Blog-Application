import  express  from "express";
// import { signupUser } from "../Controller/user_controller.js";
import { singupUser , loginUser} from "../Controller/user_controller.js";

const router = express.Router();

router.post('/signup', singupUser);
router.post('/login', loginUser);

export default router;