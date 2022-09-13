import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../model/Item';

@Injectable()
export class ToDoService
{
  baseURL = "http://localhost:7197/todo";

  constructor(private httpClient: HttpClient)
  { }

  getItems():Observable<Item[]>
  {
    return this.httpClient.get<Item[]>(`${this.baseURL}/items`);
  }

  addItem(item: Item): Observable<number>
  {
    return this.httpClient.post<number>(`${this.baseURL}/item`, item);
  }

  updateItemContent(item: Item): Observable<void>
  {
    return this.httpClient.put<void>(`${this.baseURL}/item/content`, item);
  }

  markItemAsComplete(id: number) :Observable<void>
  {
    return this.httpClient.put<void>(`${this.baseURL}/item/completed/${id}`, null);
  }
  
  deleteItem(id: number): Observable<void>
  {
    return this.httpClient.delete<void>(`${this.baseURL}/item/${id}`);
  }
}