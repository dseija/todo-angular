import { Component } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todoList: Todo[] = [
    { description: 'my first todo' },
    { description: 'a second todo', completed: true },
    { description: 'another todo' },
  ];
}
