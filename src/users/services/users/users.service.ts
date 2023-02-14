import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/users/types/user';
import { plainToClass } from "class-transformer";

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            username : "hikmah",
            password : "hikmah",
        },
        {
            username : "hikma",
            password : "hikma",
        },
        {
            username : "hik",
            password : "hik",
        },
        {
            username : "hiah",
            password : "hiah",
        },
    ];

    getUsers(){
        return this.users.map((user) => plainToClass(SerializedUser, user));
    }

    getUserByUsername(username : string) {
        return this.users.find((user) => user.username === username)
    }
}
