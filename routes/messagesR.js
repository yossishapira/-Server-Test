import express from 'express';
import { creategMessage } from '../ctrls/messagesC.js';
const router = express.Router();

router.post("/api/messages/encrypt",creategMessage);

export default router;