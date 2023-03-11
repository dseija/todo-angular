export interface Todo {
  id?: string;
  description: string;
  completed?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ITodosState {
  todos: Todo[];
}
