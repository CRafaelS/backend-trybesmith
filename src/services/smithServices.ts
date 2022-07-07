import ISmith from '../interface/smithInterface';
import smithModels from '../models/smithModels';

const getProducts = (): Promise<ISmith[]> => smithModels.getAll();

const newProducts = async (product:ISmith): Promise<ISmith> => {
  const { insertId } = await smithModels.create(product);
  const newId = product;
  newId.id = insertId;
  return product;
};

export default { getProducts, newProducts };