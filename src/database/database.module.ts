import { Module } from '@nestjs/common';
import dbConnect from 'src/lib/dbConnect';

@Module({})
export class DatabaseModule {

    async onModuleInit() {
        await dbConnect(); // Conecta a la base de datos al inicializar el módulo
      }
}
