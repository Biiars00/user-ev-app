import { container } from 'tsyringe';
import UsersController from '../../controllers/usersController';
import UsersRepository from '../../repositories/usersRepository';
import UsersService from '../../services/usersService';

container.register('UsersService', {
    useClass: UsersService,
})

container.register('UsersController', {
    useClass: UsersController,
})

container.register('UsersRepository', {
    useClass: UsersRepository,
})

export { container as users};