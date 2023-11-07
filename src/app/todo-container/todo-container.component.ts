import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTodoComponent } from '../componnents/new-todo/new-todo.component';
import { TodoService } from '../services/todo.service';
import { ITodo } from '../models/todo.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  public todo: ITodo
  public todos: any;

  constructor(public dialog: MatDialog, private todoService: TodoService, private todosService: TodoService) { }

  ngOnInit() {
    this.subscription.add(
      this.todoService.getSelectedTodo().subscribe(data =>
        this.todo = data
      )
    )
    this.subscription.add(
      this.todosService.getTodos().subscribe(data => {
        this.todos = data
      }))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewTodoComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
