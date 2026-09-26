import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

  getTasks(): string {
    return "Lista de tarefas 2";
  }

  getHolla(): string {
    return "Holla, mundo!";
  }
}
