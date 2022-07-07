import { Request, Response, Router } from 'express';
import smithService from '../services/smithServices';

const smithController = Router();

smithController.get('/', async (_req: Request, res: Response): Promise<Response> => {
  const products = await smithService.getProducts();

  return res.status(200).json(products);
});

export default smithController;