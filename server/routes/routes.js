import express from 'express';

//components
import { userSignup } from '../controller/user-controller.js';

const router=express.Router();

router.post('/signup',userSignup);

export default router;