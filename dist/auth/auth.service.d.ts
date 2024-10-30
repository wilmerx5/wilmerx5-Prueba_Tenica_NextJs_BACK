import { JwtService } from '@nestjs/jwt';
import { loginDTO } from './DTOS/loginDTO';
import { signUpDTO } from './DTOS/signUPDTO';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    createUser(user: signUpDTO): Promise<any>;
    logIn(user: loginDTO): Promise<string>;
    getUser(userId: string): Promise<import("mongoose").Document<unknown, {}, import("./user.entity").IUser> & import("./user.entity").IUser & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
}
