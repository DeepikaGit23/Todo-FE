import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';  
import { ToDoService } from './service/todo.service';


@NgModule
({
  declarations:
  [
    AppComponent,
    TodoListComponent
  ],
  imports:
  [
    BrowserModule,
    BrowserAnimationsModule,  
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule
{ }