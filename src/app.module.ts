import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Constants } from './utils/constants';
import { UsersModule } from './modules/users/users.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
  }),
  TypeOrmModule.forRootAsync({
    useFactory: (configService: ConfigService) => ({
      type: 'mysql',
      host: configService.get<string>(Constants.DB.HOST),
      port: +configService.get<number>(Constants.DB.PORT),
      database: configService.get<string>(Constants.DB.DATABASE),
      username: configService.get<string>(Constants.DB.USER),
      password: configService.get<string>(Constants.DB.PASS),
      entities:[__dirname + '/**/*.entity.{ts,js}'],
      synchronize: true,
      logging: false,
    }),
    inject:[ConfigService],
  }),
  UsersModule,
  PersonModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
