export interface IUserProps {
    id: number;
    name: string;
    email: string;
    phone: string;
}

interface IUsersRepoository {
    addUser(data: IUserProps): Promise<IUserProps>;
    getAllUsers(): Promise<IUserProps[]>;
    getUserById(id: number): Promise<IUserProps | null>;
    updateUser(id: number, data: Partial<IUserProps>): Promise<IUserProps | null>;
    deleteUser(id: number): Promise<string>;
}

export default IUsersRepoository;

