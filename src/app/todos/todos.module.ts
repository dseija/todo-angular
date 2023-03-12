import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos/todos.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { StoreModule } from '@ngrx/store';
import { todosReducer } from './_store/todos.reducer';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [
    TodosComponent,
    TodoListComponent,
    AddTodoComponent,
    TodoItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('todosState', todosReducer),
    TodosRoutingModule,
    LayoutModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
  ],
})
export class TodosModule {}
