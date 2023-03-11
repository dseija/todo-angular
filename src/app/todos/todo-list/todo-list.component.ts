import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTodos } from '../_store/todos.selectors';
import { ITodosState, Todo } from '../todos.types';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoList$!: Observable<Todo[]>;

  constructor(private readonly store: Store<ITodosState>) {}

  ngOnInit() {
    this.todoList$ = this.store.select(selectTodos);
  }
}
