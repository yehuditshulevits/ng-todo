import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HeaderComponent} from './componnents/header/header.component'
import {TodoListComponent} from './componnents/todo-list/todo-list.component'
import { materialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    TodoListComponent, 
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
