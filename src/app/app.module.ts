import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddTodoComponent,
    TodoListItemComponent,
    HomePageComponent,
    HelpPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
