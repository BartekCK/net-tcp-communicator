import { Socket } from 'net';

export interface IUser {
    id: string;
    username: string;
    socket: Socket;
}

class User implements IUser {
    private readonly _id: string;
    private readonly _username: string;
    private readonly _socket: Socket;

    constructor(id: string, username: string, socket: Socket) {
        this._id = id;
        this._username = username;
        this._socket = socket;
    }

    get id(): string {
        return this._id;
    }

    get username(): string {
        return this._username;
    }

    get socket(): Socket {
        return this._socket;
    }
}

export default User;
