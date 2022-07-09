import { Request, Response, Router } from 'express';
import userServices from '../services/userServices';
import validateUser from '../middleware/validateUser';

const userController = Router();

userController.post(
  '/',
  validateUser.isValidUsername,
  validateUser.isValidClasse,
  validateUser.isValidLevel,
  validateUser.isValidPassword,
  async (req:Request, res: Response) => {
    const token = await userServices.newUser(req.body);
    return res.status(201).json({ token });
  },
);

export default userController;
