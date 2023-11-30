// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { NewTodoComponent } from '../componnents/new-todo/new-todo.component';
// import { TodoService } from '../services/todo.service';
// import { ITodo } from '../models/todo.interface';
// import { Subscription } from 'rxjs';
// import { MatDialog } from '@angular/material/dialog';


// @Component({
//   selector: 'app-todo-container',
//   templateUrl: './todo-container.component.html',
//   styleUrls: ['./todo-container.component.scss'],
// })
// export class TodoContainerComponent implements OnInit, OnDestroy {
//   private subscription: Subscription = new Subscription();

//   public todo: ITodo
//   public todos: ITodo[];

//   constructor(private todoService: TodoService, public dialog: MatDialog) { }

//   ngOnInit() {
//     this.subscription.add(
//       this.todoService.getSelectedTodo().subscribe(data =>
//         this.todo = data
//       )
//     )
//     this.subscription.add(
//       this.todoService.getTodos().subscribe(data => {
//         this.todos = data
//       }))
//   }

//   ngOnDestroy(): void {
//     this.subscription.unsubscribe();
//   }

//   openDialog(): void {
//     const dialogRef = this.dialog.open(NewTodoComponent, {
//       width: '250px'
//     });
//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//     });
//   }
// }
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewTodoComponent } from '../componnents/new-todo/new-todo.component';
import { TodoService } from '../services/todo.service';
import { ITodo } from '../models/todo.interface';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
})
export class TodoContainerComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  public todo: ITodo;
  public todos: ITodo[];

  constructor(private todoService: TodoService, public dialog: MatDialog) { }

  ngOnInit() {
    this.subscription.add(
      this.todoService.getSelectedTodo().subscribe(data => {
        this.todo = data;
      })
    );
    this.subscription.add(
      this.todoService.getTodos().subscribe(data => {
        this.todos = data;
      })
    );
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
