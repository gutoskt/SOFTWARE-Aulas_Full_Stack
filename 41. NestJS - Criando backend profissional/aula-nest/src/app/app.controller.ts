import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getAdeus();
  }
  @Get("/teste")
  getTeste() {
    return "Rota de teste da hello API";
  }

  @Post("/teste") // Tem que ter uma função para lidar com requisições POST em seguida
  posteTeste(): string {
    return "Rota de teste POST da hello API";
  }
}
