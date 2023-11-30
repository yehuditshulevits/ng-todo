import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componnents/header/header.component'
import { TodoListComponent } from './componnents/todo-list/todo-list.component'
import { materialModule } from './material/material.module';
import { TodoComponent } from './componnents/todo/todo.component';
import { NewTodoComponent } from './componnents/new-todo/new-todo.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { MatDialog } from '@angular/material/dialog';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    TodoComponent,
    NewTodoComponent,
    TodoContainerComponent,
    MatDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
