import express from 'express';
import { verifyToken } from '../Middleware/verifyToken.js';
import { create, getAll } from '../Controllers/postController.js';



const router = express.Router();


router.post('/create',verifyToken,create)
router.get("/getpost",getAll)

export default router;