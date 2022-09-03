import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { GetHelloResponse } from '../types/app.type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): GetHelloResponse {
    return this.appService.getHello();
  }
}
