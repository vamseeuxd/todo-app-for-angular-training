import {Component, EventEmitter, HostBinding, OnInit, Output} from '@angular/core';
import {ITodoListItem} from '../../interfaces/i-todo-list.item';

@Component({
    selector: 'app-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
    /*
    * @HostBinding is Decorator that set property (class) on the component that hosts the directive
    * */
    @HostBinding('class') class = 'list-group mb-1';

    /*
    * Outputs provide a mechanism for a child (this) component to emit events up to its parent component.
    * addClick Output, which will emit when user click on Add Button or Enter Key Press in Keyboard
    * */
    @Output() addClick: EventEmitter<ITodoListItem> = new EventEmitter<ITodoListItem>();

    /*
    * toDoTitle property bind to */
    toDoTitle = '';

    /*
    * emitAddClick method is bind with
    *   1. Text Input with (keyup.enter) event
    *   2. And Add Button with (click) event
    * */
    emitAddClick() {
        if (this.toDoTitle.trim().length > 0) {
            this.addClick.emit({title: this.toDoTitle, isCompleted: false});
            this.toDoTitle = '';
        }
    }
}
