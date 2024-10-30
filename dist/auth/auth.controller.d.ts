import { Response } from 'express';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    logIn(loginDTO: any, res: Response): Promise<Response<any, Record<string, any>>>;
    signUp(signUpDTO: any, res: Response): Promise<Response<any, Record<string, any>>>;
    getUser(request: any, res: Response): Promise<Response<any, Record<string, any>>>;
}
