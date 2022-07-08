import IUser from '../interface/userInterface';
import userModels from '../models/userModels';
import generateToken from '../utils/jwt';

const newUser = async (user:IUser): Promise<string> => {
  const { insertId } = await userModels.create(user);
  const userId = user;
  userId.id = insertId;
  const token = generateToken(user);
  return token;
};

export default { newUser };
