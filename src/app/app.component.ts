import { Component } from '@angular/core';
import { HeaderComponent } from './componnents/header/header.component';
import { TodoListComponent } from './componnents/todo-list/todo-list.component';
import { MatDialog } from '@angular/material/dialog';
import { NewTodoComponent } from './componnents/new-todo/new-todo.component';

@Component({  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-todo';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(NewTodoComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
