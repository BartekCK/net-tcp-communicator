import { internet } from 'faker';

const nickCreatorService = (busyUserNames: string[]): string => {
    let temp: null | string = null;
    do {
        temp = internet.userName();
    } while (busyUserNames.includes(temp));
    return temp;
};

export default nickCreatorService;
