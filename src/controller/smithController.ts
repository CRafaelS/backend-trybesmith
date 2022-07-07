import { Request, Response, Router } from 'express';
import smithService from '../services/smithServices';
import validate from '../middleware/validatepost';

const smithController = Router();

smithController.get('/', async (_req: Request, res: Response): Promise<Response> => {
  const products = await smithService.getProducts();

  return res.status(200).json(products);
});

smithController.post(
  '/',
  validate.isValidAmount,
  validate.isValidName,
  async (req:Request, res: Response) => {
    const products = await smithService.newProducts(req.body);
    return res.status(201).json(products);
  },
);

export default smithController;