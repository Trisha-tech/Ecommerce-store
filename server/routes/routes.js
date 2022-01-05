import express from 'express';

//components
import { userSignup,userLogin } from '../controller/user-controller.js';

const router=express.Router();

router.post('/signup',userSignup);
router.post('/login',userLogin);

export default router;