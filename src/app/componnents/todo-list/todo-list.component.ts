import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { materialModule } from 'src/app/material/material.module';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Array<ITodo> = []
  constructor(private todosService: TodoService) { }

  ngOnInit(): void {}
  
  public onTodoClick(todo:ITodo, index:number){
    this.todosService.setSelectedTodo(todo);
    this.todos.forEach(todo=>{
      if(todo.selected){
        todo.selected = false;
      }})
    this.todos[index].selected = true;
  }

}
