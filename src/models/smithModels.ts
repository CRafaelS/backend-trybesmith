import connection from './connection';
import ISmith from '../interface/smithInterface';

const getAll = async (): Promise<ISmith[]> => {
  const [rows] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return rows as ISmith[];
};

export default { getAll };