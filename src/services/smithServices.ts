import ISmith from '../interface/smithInterface';
import smithModels from '../models/smithModels';

const getProducts = (): Promise<ISmith[]> => smithModels.getAll();

export default { getProducts };