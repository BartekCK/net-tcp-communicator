import { Server, Socket } from 'net';
import { v4 as uuidv4 } from 'uuid';
import { Buffer } from 'buffer';

// services
import { log, clientMsg } from './services/loggerService';
import nickCreatorService from './services/nickCreatorService';

// types
import { IUser } from './types';

const PORT: number = 8080;
const HOST: string = '127.0.0.1';

const server: Server = new Server();

let users: IUser[] = [];

server.on('connection', (socket: Socket) => {
    const user: IUser = { id: uuidv4(), username: nickCreatorService(users.map((el) => el.username)), socket };
    users.push(user);

    log.console(`New client connected ${user.username}`);
    socket.write(clientMsg.red(`Hello nice to meet you ${user.username}\n`));

    socket.on('data', (data: Buffer) => {
        const message: string = data.toString('utf8');
        users.forEach((el) => {
            if (el.id !== user.id) {
                el.socket.write(`${clientMsg.magenta(user.username)}: ${message}`);
            }
        });
    });

    socket.on('close', () => {
        log.console('Client disconnect');
        users = users.filter((el) => el.id !== user.id);
    });
});

server.listen(PORT, HOST, () => log.info(`Server start listen on ${PORT} port`));
