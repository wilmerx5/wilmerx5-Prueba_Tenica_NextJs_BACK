import { Body, Controller, Get, Post, Request, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { IUser } from './user.entity';


@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('/login')
    async logIn(@Body() loginDTO, @Res() res: Response) {

        try{
            const JWT:String = await  this.authService.logIn(loginDTO)
 
        
            return res.status(200).json({"status":"success",  "token":JWT })
        }
        catch(e){
         return res.status(402).json({"status":"error", "msg":e.message })
 
        }
    }

    @Post('/signup')
    async signUp(@Body() signUpDTO, @Res() res: Response) {

       try{
           const userId = await  this.authService.createUser(signUpDTO)

           return res.status(200).json({"status":"success", userId })
       }
       catch(e){
        return res.status(402).json({"status":"error", "msg":e.message })

       }
    }
    
    @UseGuards(JwtAuthGuard)
    @Get('/user')
    async getUser(@Request() request, @Res() res: Response) {

       try{
        const userId = request['user']['userId']

           const user:IUser = await  this.authService.getUser(userId)

           return res.status(200).json({"status":"success", user })
       }
       catch(e){
        return res.status(402).json({"status":"error", "msg":e.message })

       }
    }

}
