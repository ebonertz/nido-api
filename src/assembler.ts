import { NestFactory } from '@nestjs/core';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AppModule } from './app.module';

const appService = new AppService();
const appController = new AppController(appService);

const ola = appController.getHello();
console.log(ola);
