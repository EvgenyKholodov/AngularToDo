import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: 'search', component: SearchComponent },
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
