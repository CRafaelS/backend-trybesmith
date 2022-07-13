import { RowDataPacket } from 'mysql2';
import connection from './connection';
import IOrder from '../interface/orderInterface';
// import IProduct from '../interface/productsInterface';

const getAllOrder = async (): Promise<IOrder[]> => {
  const [result] = await connection.execute(
    'SELECT id, userId FROM Trybesmith.Orders ORDER BY userId;',
  );
  return result as IOrder[];
};

const getAllProduct = async (userId: number) => {
  const [result] = await connection.execute<RowDataPacket[]>(
    'SELECT id FROM Trybesmith.Products WHERE orderId = ?;', 
    [userId],
  );
  return result.map(({ id }) => id);
};

export default { getAllOrder, getAllProduct };