import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import {Task} from '../../Task'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {

    //this.tasks is an empty array that we set it above as a property

    //we usually do not use it like this and need to use observables because we're
    //usually dealing with async data

    //we subscribe to an observable so we can constantly watch it

    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

}
