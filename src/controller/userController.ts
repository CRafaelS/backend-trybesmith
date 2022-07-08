import { Request, Response, Router } from 'express';
import userServices from '../services/userServices';

const userController = Router();

userController.post(
  '/',
  async (req:Request, res: Response) => {
    const token = await userServices.newUser(req.body);
    return res.status(201).json({ token });
  },
);

export default userController;
