import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GetHelloResponse } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): GetHelloResponse {
    return this.appService.getHello();
  }
}
