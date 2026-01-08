import express from 'express';
import userController from '../controllers/user.controller.js';

const router = express.Router();

router.post('/users', userController.create);
router.get('/users', userController.getAll);
router.get('/users/:id', userController.getById);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

export default router;
