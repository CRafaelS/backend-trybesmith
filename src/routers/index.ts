import { Router } from 'express';
import smithController from '../controller/smithController';
import userController from '../controller/userController';

const routers = Router();

routers.use('/products', smithController);
routers.use('/users', userController);

export default routers;