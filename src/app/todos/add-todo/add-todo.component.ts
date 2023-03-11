import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo } from '../_store/todos.actions';
import { ITodosState } from '../todos.types';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {
  description = '';

  constructor(private readonly store: Store<ITodosState>) {}

  addTodoItem() {
    if (this.description) {
      this.store.dispatch(addTodo({ description: this.description }));
      this.description = '';
    }
  }
}
