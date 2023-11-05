import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private mok: ITodo[] = [
    { id: 1,titel: "Glitter", description: "Drama|Musical|Romance", isCompleted: false, isArchived: false, endDate: "6/10/2023", selected: true },
    { id: 2,titel: "Cat's Meow, The", description: "Drama|Thriller", isCompleted: false, isArchived: false, endDate: "5/4/2023", selected: false },
    { id: 3,titel: "Third Person", description: "Drama|Romance", isCompleted: false, isArchived: false, endDate: "2/13/2023", selected: false },
    { id: 4,titel: "Sure Thing, The", description: "Comedy|Romance", isCompleted: false, isArchived: false, endDate: "6/30/2023", selected: false },
    { id: 5,titel: "Hanging Up", description: "Comedy|Drama", isCompleted: false, isArchived: false, endDate: "3/3/2023", selected: false },
    { id: 6,titel: "Entertainer, The", description: "Drama", isCompleted: false, isArchived: false, endDate: "6/20/2023", selected: false },
    { id: 7,titel: "Southland Tales", description: "Comedy|Drama|Sci-Fi|Thriller", isCompleted: false, isArchived: false, endDate: "9/8/2023", selected: false },
    { id: 8,titel: "Uninvited, The", description: "Drama|Horror|Mystery|Thriller", isCompleted: false, isArchived: false, endDate: "11/18/2022", selected: false },
    { id: 9,titel: "Grey Fox, The", description: "Romance|Western", isCompleted: false, isArchived: false, endDate: "2/17/2023", selected: false },
    { id: 10,titel: "Day the Earth Stood Still, The", description: "Drama|Sci-Fi|Thriller", isCompleted: false, isArchived: false, endDate: "4/30/2023", selected: false }
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
