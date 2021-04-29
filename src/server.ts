import { Server, Socket } from 'net';
import { v4 as uuidv4 } from 'uuid';

import { Buffer } from 'buffer';

// services
import log from './services/loggerService';
import nickCreatorService from './services/nickCreatorService';

const PORT: number = 8080;
const HOST: string = '127.0.0.1';

const server: Server = new Server();

let users: any[] = [];

server.on('connection', (socket: Socket) => {
    const user = { id: uuidv4(), username: nickCreatorService(users.map((el) => el.username)) };
    users.push(user);
    log.console(`New client connected ${user.username}`);
    socket.write(`Hello nice to meet you ${user.username}\n`);

    socket.on('data', (data: Buffer) => {
        console.log('I receive data', data.toString('utf8'));
    });

    socket.on('close', () => {
        log.console('Client disconnect');
        users = users.filter((el) => el.id !== user.id);
    });
});

server.listen(PORT, HOST, () => log.info(`Server start listen on ${PORT} port`));
