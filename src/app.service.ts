import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World V2! Huuuray!!!';
  }

  getPing(): string {
    return 'Pong!';
  }
}
