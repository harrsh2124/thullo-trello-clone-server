import { Injectable } from '@nestjs/common';
import { GetHelloResponse } from './types';

@Injectable()
export class AppService {
  getHello(): GetHelloResponse {
    return {
      message: 'Server is up and running.',
    };
  }
}
