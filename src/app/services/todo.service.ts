import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private mok: ITodo[] = [
    { titel: "Glitter", description: "Drama|Musical|Romance", isCompleted: false, isArchived: false, endDate: "6/10/2023", selected: true },
    { titel: "Cat's Meow, The", description: "Drama|Thriller", isCompleted: false, isArchived: false, endDate: "5/4/2023", selected: false },
    { titel: "Third Person", description: "Drama|Romance", isCompleted: false, isArchived: false, endDate: "2/13/2023", selected: false },
    { titel: "Sure Thing, The", description: "Comedy|Romance", isCompleted: false, isArchived: false, endDate: "6/30/2023", selected: false },
    { titel: "Hanging Up", description: "Comedy|Drama", isCompleted: false, isArchived: false, endDate: "3/3/2023", selected: false },
    { titel: "Entertainer, The", description: "Drama", isCompleted: false, isArchived: false, endDate: "6/20/2023", selected: false },
    { titel: "Southland Tales", description: "Comedy|Drama|Sci-Fi|Thriller", isCompleted: false, isArchived: false, endDate: "9/8/2023", selected: false },
    { titel: "Uninvited, The", description: "Drama|Horror|Mystery|Thriller", isCompleted: false, isArchived: false, endDate: "11/18/2022", selected: false },
    { titel: "Grey Fox, The", description: "Romance|Western", isCompleted: false, isArchived: false, endDate: "2/17/2023", selected: false },
    { titel: "Day the Earth Stood Still, The", description: "Drama|Sci-Fi|Thriller", isCompleted: false, isArchived: false, endDate: "4/30/2023", selected: false }
  ]

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mok)
  constructor() { }

  private _singelTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(this.mok[0])

  public getTodos(): Observable<Array<ITodo>> {
    return this._todoSubject.asObservable();
  }
  public getSelectedTodo(): Observable<ITodo>{
    return this._singelTodoSubject.asObservable();
  }
  public setSelectedTodo(todo:ITodo){
    this._singelTodoSubject.next(todo)
  }
}
