import { Socket } from 'net';
import { Buffer } from 'buffer';

// models
import User from '../models/User';

// services
import { UserService } from './UserService';

// utils
import { clientMsg } from '../utils/loggerService';

class StateService {
    private readonly _user: User;
    private userService: UserService = new UserService();

    constructor(socket: Socket) {
        this._user = this.userService.createUser(socket);
        this.userService.addNewUser(this._user);
        socket.write(clientMsg.red(`Hello nice to meet you ${this.user.username}\n`));
    }

    removeUser() {
        this.userService.removeUser(this._user.id);
    }

    writeBroadcastMsg = (data: Buffer) => {
        const message: string = data.toString('utf8');
        this.userService.sendBroadcastMessage(this._user, message);
    };

    get user(): User {
        return this._user;
    }
}

export default StateService;
