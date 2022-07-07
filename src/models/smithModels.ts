import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import ISmith from '../interface/smithInterface';

const getAll = async (): Promise<ISmith[]> => {
  const [rows] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return rows as ISmith[];
};

const create = async (product:ISmith): Promise<ResultSetHeader> => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [product.name, product.amount],
  );

  return result;
};

export default { getAll, create };