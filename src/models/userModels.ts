import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IUser from '../interface/userInterface';

const create = async (user:IUser): Promise<ResultSetHeader> => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES  (?,?,?,?)',
    [user.username, user.classe, user.level, user.password],
  );

  return result;
};

export default { create };
