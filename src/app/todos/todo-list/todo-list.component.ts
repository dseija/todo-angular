import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectProcessing,
  selectTodos,
  selectUnauthorized,
} from '../_store/todos.selectors';
import { ITodosState } from '../todos.types';
import { loadTodos } from '../_store/todos.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoList$ = this.store.select(selectTodos);
  processing$ = this.store.select(selectProcessing);
  unauthorized$ = this.store.select(selectUnauthorized);

  constructor(
    private readonly store: Store<ITodosState>,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.store.dispatch(loadTodos());

    this.unauthorized$.subscribe((unauthorized) => {
      if (unauthorized)
        this.router.navigateByUrl('/signin', { replaceUrl: true });
    });
  }
}
