// models
import User from '../models/User';

export interface IUserRepository {
    save: (user: User) => void;
    remove: (userId: string) => void;
    findByUsername: (username: string) => User | undefined;
    getAll: () => User[];
}

class UserRepository implements IUserRepository {
    private users: User[] = [];

    save(user: User): void {
        this.users.push(user);
    }

    remove(userId: string): void {
        this.users = this.users.filter((user) => user.id !== userId);
    }

    findByUsername(username: string): User | undefined {
        return this.users.find((user) => user.username === username);
    }

    getAll(): User[] {
        return this.users;
    }
}

export const userRepository = new UserRepository();
