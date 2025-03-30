import { inject, injectable } from "tsyringe";
import IUsersRepoository, { IUserProps } from "../interfaces/repositories/usersInterface";

@injectable()
class UsersService {
    constructor(
        @inject('UsersRepository') 
        private usersRepository: IUsersRepoository
    ) {}

    async getAllUsers(): Promise<IUserProps[]> {
        const userList = await this.usersRepository.getAllUsers();

        if (userList.length === 0) {
            return [];
        }

        return userList;
    }

    async getUserById(id: number): Promise<IUserProps | null> {
        const userId = await this.usersRepository.getUserById(id);

        if (userId) {
            return userId;
        } else {
            throw new Error('User not found!');
        }
    }

    async addUser(data: IUserProps): Promise<IUserProps> {
        const createUser = await this.usersRepository.addUser(data);

        if (createUser) {
            return createUser;
        } else {
            throw new Error('Unable to insert user data!');
        }
    }

    async updateUser(id: number, data: Partial<IUserProps>): Promise<IUserProps> {
        const { name, email, phone } = data;
        const editUserData = await this.usersRepository.updateUser(id, { name, email, phone });

        if (editUserData) {
            return editUserData;
        } else {
            throw new Error('Unable to update user data!');
        }
    }

    async removeUser(id: number): Promise<string> {
        const removeUser = await this.usersRepository.deleteUser(id);

        if (removeUser) {
            return 'User deleted successfully!';
        } else {
            return 'User not found!';
        }
    }
}

export default UsersService;