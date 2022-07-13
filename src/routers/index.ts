import { Router } from 'express';
import ordersController from '../controller/orderController';
import smithController from '../controller/smithController';
import userController from '../controller/userController';

const routers = Router();

routers.use('/products', smithController);
routers.use('/users', userController);
routers.use('/orders', ordersController);

export default routers;