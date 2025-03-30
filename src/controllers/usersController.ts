import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import UsersService from '../services/usersService';

@injectable()
class UsersController {
    constructor(
        @inject('UsersService')
        private usersService: UsersService
    ) {}

    async getAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const response = await this.usersService.getAllUsers();

            if (response) {
                res.status(200).json(response);
            } else {
                res.status(404).json({ error: 'Users not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getUserById(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);

            if (isNaN(id)) {
                res.status(400).json({ error: 'Invalid ID' });
                return;
            }
        
            const response = await this.usersService.getUserById(id);

            if (response) {
                res.status(200).json(response);
            } else {
                res.status(404).json({ error: 'User not found!' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async addUser(req: Request, res: Response): Promise<void> {
        try {
            if (!req.body) {
                res.status(400).json({ error: 'Invalid request body!' });
                return;
            }

            const response = await this.usersService.addUser(req.body);

            if (response) {
                res.status(201).json(response);
            } else {
                res.status(404).json({ error: 'Invalid request' });
            }
        } catch (error) {
            console.error('Error in addUser controller:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async updateUser(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);

            if (!req.body || !id) {
                res.status(400).json({ error: 'Invalid request params or body!' });
                return;
            }

            if (isNaN(id)) {
                res.status(400).json({ error: 'Invalid ID' });
                return;
            }

            const response = await this.usersService.updateUser(id, req.body);

            if (response) {
                res.status(200).json(response);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async removeUser(req: Request, res: Response): Promise<any> {
        try {
            const id = parseInt(req.params.id);

            if (isNaN(id)) {
                return 'Invalid ID';
            }

            const response = await this.usersService.removeUser(id);

            if (response) {
                res.status(200).json(response);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default UsersController;