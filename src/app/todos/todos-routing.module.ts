import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sessionGuard } from '../session/session.guard';
import { TodosComponent } from './todos/todos.component';

const todosRoutes: Routes = [
  { path: '', component: TodosComponent, canActivate: [sessionGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(todosRoutes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
