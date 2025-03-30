import 'reflect-metadata';
import { Request, Response, Router } from 'express';
import UsersController from '../controllers/usersController';
import { container } from '../dependencies/container';

const usersRouter = Router();

const usersController = container.resolve(UsersController)

usersRouter.get('/', (req: Request, res: Response) => {
  return usersController.getAllUsers(req, res);
});

usersRouter.get('/:id', (req: Request, res: Response) => {
  return usersController.getUserById(req, res);
});

usersRouter.post('/', (req: Request, res: Response) => {
  return usersController.addUser(req, res);
});

usersRouter.put('/:id', (req: Request, res: Response) => {
  return usersController.updateUser(req, res);
});

usersRouter.delete('/:id', (req: Request, res: Response) => {
  return usersController.removeUser(req, res);
});

export default usersRouter;