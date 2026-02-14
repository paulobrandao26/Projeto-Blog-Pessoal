import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './Auth/auth.module';
import { Postagem } from './Postagem/entities/Postagem.entity';
import { PostagemModule } from './Postagem/Postagem.module';
import { Tema } from './tema/entities/tema.entity';
import { TemaModule } from './tema/tema.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_blogpessoal',
      entities: [Postagem, Tema, Usuario],
      synchronize: true,
    }),
    PostagemModule,
    TemaModule,
    UsuarioModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
