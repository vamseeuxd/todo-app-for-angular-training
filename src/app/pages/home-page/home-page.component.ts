import {Component} from '@angular/core';
import {ITodoListItem} from '../../interfaces/i-todo-list.item';
import {TodoListService} from '../../services/todo-list.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

    /*
    *   pageTitle property, which is bind to h4 element in template.
    */
    public pageTitle = 'Home Page';

    /*
    *   todayDate property, which is bind to h4 element in template for pipe example
    */
    public todayDate = new Date();

    /*
    *   noRecordsFoundMessage property, which is bind to h6 element in template.
    */
    public noRecordsFoundMessage = 'No Todo\'s to show';

    /*
    *  todoList property, which is bind to TodoListComponent in template.
    *  todoList property data will refers todoList in TodoListService.
    */
    public todoList: ITodoListItem[] = [];

    /*
    *   HomePageComponent constructor used for TodoListService Dependency injection.
    */
    constructor(
        public todoListService: TodoListService
    ) {
        this.todoList = this.todoListService.todoList;
    }

    /*
    * this method bind to AddTodoComponent (addClick) output.
    * this method will call todoListService.addTodo to add newTodo.
    * */
    addTodoItem(todoListItem: ITodoListItem) {
        this.todoListService.addTodo(todoListItem);
    }

    /*
    * this method bind to AddTodoComponent (updateToComplete) output.
    * this method will call todoListService.updateToComplete to update existingTodo isComplete property to true.
    * */
    updateToComplete(id: number) {
        this.todoListService.updateToComplete(id);
    }

    /*
    * this method bind to AddTodoComponent (updateToNotComplete) output.
    * this method will call todoListService.updateToNotComplete to update existingTodo isComplete property to false.
    * */
    updateToNotComplete(id: number) {
        this.todoListService.updateToNotComplete(id);
    }

    /*
    * this method bind to AddTodoComponent (deleteTodo) output.
    * this method will call todoListService.deleteTodo to delete existingTodo.
    * */
    deleteTodo(id: number) {
        this.todoListService.deleteTodo(id);
    }

}
