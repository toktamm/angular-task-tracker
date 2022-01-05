import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Task } from '../Task'
import { TASKS } from '../mock-tasks'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor() { }

  //instead of Task as a type, it's gonna be Task as an Observable

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }

}
