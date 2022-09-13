import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Item } from '../model/Item';
import { ToDoService } from '../service/todo.service';

@Component
({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit
{
  constructor(public toDoService: ToDoService, private toasterService: ToastrService)
  { }

  completedItems = [];
  pendingItems = [];

  newItem : string | undefined;

  ngOnInit(): void
  {
    this.loadToDoList();
  }
  
  loadToDoList()
  {
    this.toDoService.getItems()
                    .subscribe(items =>
                              {
                                this.pendingItems = [];
                                this.completedItems = [];                            
                                items.forEach(element =>
                                              {
                                                if(element.completed)
                                                {
                                                  this.completedItems.push(element);
                                                }
                                                else
                                                {
                                                  this.pendingItems.push(element);
                                                }
                                            });
                              });
  }

  addItem()
  {
    let item: Item = { id: 0, content: this.newItem, completed: false, editable: false};

    this.toDoService.addItem(item)
                    .subscribe(() => this.loadToDoList());
                    this.toasterService.success(`"${item.content}" is added to the list`);
                    this.newItem='';
  }

  updateItemContent(item: Item)
  {
    this.toDoService.updateItemContent(item)
                    .subscribe(() => this.loadToDoList());
  }

  markItemAsComplete(id: number)
  {
    this.toDoService.markItemAsComplete(id)
                    .subscribe(() => this.loadToDoList());
  }

  deleteItem(item: Item)
  {
    this.toDoService.deleteItem(item.id)
                    .subscribe(() => this.loadToDoList());
                    this.toasterService.error(`"${item.content}" is deleted from the list`);
  }
}