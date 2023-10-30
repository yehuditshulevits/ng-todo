import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { materialModule } from 'src/app/material/material.module';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {
  public todos: Array<ITodo> = []
  private subscription: Subscription = new Subscription()
  constructor(private todosService: TodoService) { }
  ngOnInit(): void {
    this.subscription.add(
      this.todosService.getTodos().subscribe(data => {
        this.todos = data
      }
      )
    )

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()

  }

}
