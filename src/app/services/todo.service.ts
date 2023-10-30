import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private mok: ITodo[] = [
    { titel: "Glitter", description: "Drama|Musical|Romance", isCompleted: true, isArchived: false, endDate: "6/10/2023" },
    { titel: "Cat's Meow, The", description: "Drama|Thriller", isCompleted: true, isArchived: true, endDate: "5/4/2023" },
    { titel: "Third Person", description: "Drama|Romance", isCompleted: true, isArchived: true, endDate: "2/13/2023" },
    { titel: "Sure Thing, The", description: "Comedy|Romance", isCompleted: false, isArchived: false, endDate: "6/30/2023" },
    { titel: "Hanging Up", description: "Comedy|Drama", isCompleted: true, isArchived: true, endDate: "3/3/2023" },
    { titel: "Entertainer, The", description: "Drama", isCompleted: false, isArchived: false, endDate: "6/20/2023" },
    { titel: "Southland Tales", description: "Comedy|Drama|Sci-Fi|Thriller", isCompleted: true, isArchived: true, endDate: "9/8/2023" },
    { titel: "Uninvited, The", description: "Drama|Horror|Mystery|Thriller", isCompleted: false, isArchived: true, endDate: "11/18/2022" },
    { titel: "Grey Fox, The", description: "Romance|Western", isCompleted: true, isArchived: true, endDate: "2/17/2023" },
    { titel: "Day the Earth Stood Still, The", description: "Drama|Sci-Fi|Thriller", isCompleted: false, isArchived: true, endDate: "4/30/2023" }
  ]

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mok)
  constructor() { }

  public getTodos(): Observable<Array<ITodo>> {
    return this._todoSubject.asObservable();

  }
}
