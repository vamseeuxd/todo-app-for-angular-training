import {Injectable} from '@angular/core';
import {ITodoListItem} from '../interfaces/i-todo-list.item';

@Injectable({providedIn: 'root'})
export class TodoListService {

    /*
    * To Do List Array
    * All todoListItems will stored in this Array
    **/
    public todoList: ITodoListItem[] = [];

    /*
    * Method to add New To Do to todoList
    **/
    addTodo(newTodoItem: ITodoListItem) {
        newTodoItem.id = new Date().getTime();
        this.todoList.push(newTodoItem);
    }

    /*
    * Method to delete To Do from todoList
    **/
    deleteTodo(todoItemId: number) {
        for (let i = this.todoList.length - 1; i >= 0; i--) {
            if (this.todoList[i].id === todoItemId) {
                this.todoList.splice(i, 1);
            }
        }
    }

    /*
    * Method to set To Do isCompleted property to true
    **/
    updateToComplete(todoItemId: number) {
        this.todoList.forEach(todoItem => {
            if (todoItem.id === todoItemId) {
                todoItem.isCompleted = true;
            }
        });
    }

    /*
    * Method to set To Do isCompleted property to false
    **/
    updateToNotComplete(todoItemId: number) {
        this.todoList.forEach(todoItem => {
            if (todoItem.id === todoItemId) {
                todoItem.isCompleted = false;
            }
        });
    }
}

