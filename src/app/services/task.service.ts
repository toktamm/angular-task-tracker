import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../Task'
import { TASKS } from '../mock-tasks'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  //instead of Task as a type, it's gonna be Task as an Observable

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }

}
