import express from 'express';
import { 
  getAllUsers, 
  createUser, 
  updateUser, 
  deleteUser, 
  getUserById,
  getUsersByType
} from '../controllers/superAdminController.js';
import { protect, superAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Apply middleware to all routes
router.use(protect);
router.use(superAdmin);

// User management routes
router.get('/users', getAllUsers);
router.post('/users', createUser);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.get('/users/type/:userType', getUsersByType);

export default router;
