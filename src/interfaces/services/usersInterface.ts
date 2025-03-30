import { IUserProps } from "../repositories/usersInterface";

interface IUsersService {
    getAllUsers(): Promise<IUserProps[]>;
    getUserById(id: number): Promise<IUserProps | null>;
    addUser(data: IUserProps): Promise<IUserProps>;
    updateUser(id: number, data: Partial<IUserProps>): Promise<IUserProps>;
    removeUser(id: number): Promise<string>;
}

export default IUsersService;