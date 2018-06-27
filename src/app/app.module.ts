import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { AppRoutingModule } from './/app-routing.module';
import { SearchComponent } from './search/search.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { AutoFocusDirective } from './auto-focus.directive';
import { InputLineComponent } from './input-line/input-line.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    SearchComponent,
    TaskComponent,
    AutoFocusDirective,
    InputLineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
