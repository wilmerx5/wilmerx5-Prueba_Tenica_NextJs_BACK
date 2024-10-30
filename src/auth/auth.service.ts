import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { comparePassword, hashPassword } from 'src/lib/bcrypt.utils';
import { loginDTO } from './DTOS/loginDTO';
import { signUpDTO } from './DTOS/signUPDTO';
import UserModel from './user.entity';
@Injectable()
export class AuthService {
   

  constructor(private readonly jwtService: JwtService) {}
  async createUser(user: signUpDTO) {
    try {
        const existingUser = await UserModel.findOne({ email: user.email });
        if (existingUser) {
            throw new Error('Email is already registered');
        }

        const hashedPassword = await hashPassword(user.password);

        const newUser = new UserModel({
            name: user.name,
            email: user.email,
            password: hashedPassword,
            phone: user.phone,
        });

        const savedUser = await newUser.save();
        return savedUser?.id;
    } catch (e) {
        throw new Error(e.message);
    }
}

    async logIn(user: loginDTO) {
        try {
            const foundUser = await UserModel.findOne({ email: user.email });
            if (!foundUser) {
                throw new Error('User or password incorrect');
            }

            const isPasswordValid = await comparePassword(user.password, foundUser.password);
            if (!isPasswordValid) {
                throw new Error('User or password incorrect');
            }

            const payload = { userId: foundUser._id, email: foundUser.email }; // Puedes agregar más datos al payload
            const token = this.jwtService.sign(payload);

            return token
        } catch (e) {
            throw new Error(e.message);
        }
    }


    async getUser(userId: string) {
        try {
            return await UserModel.findById(userId)
            .select('name email phone')
            .exec();

           
        } catch (e) {

            throw new Error(e.message)
        }
    }
}
