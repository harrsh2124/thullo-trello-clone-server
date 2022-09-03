import { Injectable } from '@nestjs/common';
import env from '../config/env';
import { GetHelloResponse } from '../types/app.type';

@Injectable()
export class AppService {
  getHello(): GetHelloResponse {
    return {
      message: 'Server is up and running.',
      port: env.app.port,
    };
  }
}
