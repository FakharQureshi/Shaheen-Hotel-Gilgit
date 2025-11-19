import express from 'express';
import { register, login , updateUser, getUser , getAllUsers, promoteToAdmin  } from '../controllers/authControllers.js'; // Adjust path as needed
import authMiddleware from '../middleware/authMiddleware.js';
import adminMiddleware from '../middleware/adminMiddlewares.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Update user information
router.put('/update', authMiddleware, updateUser);

// get user by id 
router.get('/user/:id', authMiddleware, adminMiddleware, getUser);

// get all users 

router.get('/users', authMiddleware, adminMiddleware, getAllUsers);

// promote user to admin 
router.put('/promote/:id', authMiddleware, adminMiddleware, promoteToAdmin);

export default router;
