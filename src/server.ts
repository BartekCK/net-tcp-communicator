import { Server, Socket } from 'net';

// services
import StateService from './services/StateService';

// utils
import { log } from './utils/loggerService';

const PORT: number = 8080;

const server: Server = new Server();

server.on('connection', (socket: Socket) => {
    const stateService = new StateService(socket);

    log.console(`New client connected ${stateService.user.username}`);

    socket.on('data', stateService.writeBroadcastMsg);
    socket.on('close', () => {
        log.console('Client disconnect');
        stateService.removeUser();
    });
});

server.listen(PORT, () => log.info(`Server start listen on ${PORT} port`));
