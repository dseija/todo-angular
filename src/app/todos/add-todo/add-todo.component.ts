import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo } from '../_store/todos.actions';
import { ITodosState } from '../todos.types';
import { selectTodos, selectTodosLength } from '../_store/todos.selectors';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  todosLength$ = this.store.select(selectTodosLength);
  nextIndex = 0;
  description = '';

  constructor(private readonly store: Store<ITodosState>) {}

  ngOnInit() {
    this.todosLength$.subscribe((nextIndex) => {
      this.nextIndex = nextIndex;
    });
  }

  addTodoItem() {
    if (this.description) {
      this.store.dispatch(
        addTodo({ index: this.nextIndex, description: this.description })
      );
      this.description = '';
    }
  }
}
