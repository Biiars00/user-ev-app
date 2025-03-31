export interface IUserProps {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export interface ICountResult {
    total: number;
}

interface IUsersRepoository {
    addUser(data: IUserProps): Promise<IUserProps>;
    getAllUsers(page: number, limit: number): Promise<{ users: IUserProps[], totalUsers: number }>;
    getUserById(id: number): Promise<IUserProps | null>;
    updateUser(id: number, data: Partial<IUserProps>): Promise<IUserProps | null>;
    deleteUser(id: number): Promise<string>;
}

export default IUsersRepoository;

