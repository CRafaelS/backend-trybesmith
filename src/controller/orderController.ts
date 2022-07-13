import { Request, Response, Router } from 'express';
import orderServices from '../services/orderServices';

const ordersController = Router();

ordersController.get('/', async (_req:Request, res: Response) => {
  const getAll = await orderServices.getAllOrderProduct();
  return res.status(200).json(getAll);
});

export default ordersController;