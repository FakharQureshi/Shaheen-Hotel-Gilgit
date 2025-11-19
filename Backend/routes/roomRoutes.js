import express from 'express';
import {
  getRooms,
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom
} from '../controllers/roomController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getRooms);
router.get('/:id', getRoom);
router.post('/', authMiddleware, createRoom);
router.put('/:id', authMiddleware, updateRoom);
router.delete('/:id', authMiddleware, deleteRoom);

export default router;

