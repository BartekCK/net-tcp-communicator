import { Socket } from 'net';
import { v4 as uuidv4 } from 'uuid';
import { internet } from 'faker';

// models
import User from '../models/User';

// repositories
import { userRepository, IUserRepository } from '../repositories/UserRepository';

// utils
import { clientMsg } from '../utils/loggerService';

export class UserService {
    private userRepo: IUserRepository = userRepository;

    addNewUser(user: User): void {
        this.userRepo.save(user);
    }

    removeUser(userId: string): void {
        this.userRepo.remove(userId);
    }

    sendBroadcastMessage(broadcaster: User, msg: string): void {
        this.userRepo.getAll().forEach((user) => {
            if (broadcaster.id !== user.id) {
                user.socket.write(`${clientMsg.magenta(broadcaster.username)}: ${msg}`);
            }
        });
    }

    createUser(socket: Socket): User {
        let username: string;
        do {
            username = internet.userName();
        } while (!!this.userRepo.findByUsername(username));

        return new User(uuidv4(), username, socket);
    }
}
