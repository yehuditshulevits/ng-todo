import { Component } from '@angular/core';
import { HeaderComponent } from './componnents/header/header.component';
import { TodoListComponent } from './componnents/todo-list/todo-list.component';

@Component({  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-todo';
}
