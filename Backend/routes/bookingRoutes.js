import express from 'express';
import { getRooms, getRoom, createRoom, updateRoom, deleteRoom } from '../controllers/roomController.js';
import adminMiddleware from '../middleware/adminMiddlewares.js'
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getRooms);
router.get('/:id', getRoom);
router.post('/',  adminMiddleware, authMiddleware, createRoom);
router.put('/:id', adminMiddleware, authMiddleware, updateRoom);
router.delete('/:id', adminMiddleware, authMiddleware, deleteRoom);

export default router;
