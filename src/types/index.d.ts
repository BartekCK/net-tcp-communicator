import { Socket } from 'net';

export interface IUser {
    id: string;
    username: string;
    socket: Socket;
}
