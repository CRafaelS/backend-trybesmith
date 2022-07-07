import { Router } from 'express';
import smithController from '../controller/smithController';

const routers = Router();

routers.use('/products', smithController);

export default routers;