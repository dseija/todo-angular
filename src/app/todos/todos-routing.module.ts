import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userAuthGuard } from '../users/userAuth.guard';
import { TodosComponent } from './todos/todos.component';

const todosRoutes: Routes = [
  { path: '', component: TodosComponent, canActivate: [userAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(todosRoutes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
