import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos/todos.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';

@NgModule({
  declarations: [TodosComponent, TodoListComponent, AddTodoComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
  ],
})
export class TodosModule {}
