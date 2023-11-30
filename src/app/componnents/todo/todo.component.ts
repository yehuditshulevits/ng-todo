import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() set todo(todo: ITodo) {
    this._todo = todo;
    console.log(todo);
  }
  get todo(){
    return this._todo
  }

  private _todo: ITodo;

  constructor() { }

  ngOnInit(): void { }

  public onCompletedTodo(todo: ITodo): void {
    todo.isCompleted = true;
  }
  public onArchivedTodo(): void {
    this.todo.isArchived = true;

  }
}
