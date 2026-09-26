import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {} // Tm que ter o serviço injetado para poder usar os métodos dele

  @Get()
  getTasks(): string {
    return this.tasksService.getTasks();
  }

  @Get('/teste')
  getTeste(): string {
    return this.tasksService.getHolla();
  }
}
