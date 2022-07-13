import orderModels from '../models/orderModels';

const getAllOrderProduct = async () => {
  const allOrder = await orderModels.getAllOrder();
  const allOrderProduct = allOrder.map(async ({ id, userId }) => ({
    id,
    userId,
    productsIds: await orderModels.getAllProduct(id),
  }));
  const resultAll = await Promise.all(allOrderProduct);
  return resultAll;
};

export default { getAllOrderProduct };