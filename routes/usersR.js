import express from 'express';
import { createUser } from '../ctrls/usersC.js';

const  router = express.Router();

router.post("/api/auth/register",createUser);

export default router;