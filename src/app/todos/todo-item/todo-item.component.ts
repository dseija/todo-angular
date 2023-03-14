import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeTodo, updateTodoCompleted } from '../_store/todos.actions';
import { ITodosState, Todo } from '../todos.types';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo: Todo | undefined;
  @Input() index: number = -1;

  constructor(private readonly store: Store<ITodosState>) {}

  toggleTodoItem(completed: boolean) {
    if (completed !== this.todo?.completed)
      this.store.dispatch(
        updateTodoCompleted({ index: this.index, completed })
      );
  }

  removeTodoItem(event: Event) {
    event.stopPropagation();
    this.store.dispatch(removeTodo({ index: this.index }));
  }
}
