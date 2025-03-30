import { injectable } from 'tsyringe';
import IUsersRepoository, { IUserProps } from '../interfaces/repositories/usersInterface';
import dbConnection from '../database/config';
import {
    addUserQuery,
    getAllUsersQuery,
    getUserByIdQuery,
    updateUserQuery,
    deleteUserQuery,
    createTable
  } from '../database/queries/queries';

@injectable()
class UserRepository implements IUsersRepoository {

    async addUser(data: IUserProps): Promise<IUserProps> {
        const { name, email, phone } = data;
        const [result] = await dbConnection.execute(addUserQuery, [name, email, phone]);
    
        const createUser = {
          ...data,
          id: (result as any).insertId, 
        };
        return createUser;
    }
    
    async getAllUsers(): Promise<IUserProps[]> {
        const [rows] = await dbConnection.execute(getAllUsersQuery);
        return rows as IUserProps[];
    }
    
    async getUserById(id: number): Promise<IUserProps | null> {
        const [rows] = await dbConnection.execute(getUserByIdQuery, [id]);
    
        if (Array.isArray(rows) && rows.length > 0) {
          return rows[0] as IUserProps;
        }
        return null;
    }
    
    async updateUser(id: number, data: Partial<IUserProps>): Promise<IUserProps | null> {
        const { name, email, phone } = data;
        const [result] = await dbConnection.execute(updateUserQuery, [name, email, phone, id]);
    
        if ((result as any).affectedRows === 0) {
            return null;
        }

        return this.getUserById(id);
    }
    
    async deleteUser(id: number): Promise<string> {
        const [result] = await dbConnection.execute(deleteUserQuery, [id]);
    
        if ((result as any).affectedRows > 0) {
          return 'User deleted successfully!';
        }
        return 'User not found!';
    }
}

export default UserRepository;