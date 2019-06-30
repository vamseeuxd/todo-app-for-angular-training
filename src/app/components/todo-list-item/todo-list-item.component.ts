import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {ITodoListItem} from '../../interfaces/i-todo-list.item';

@Component({
    selector: 'app-todo-list-item',
    templateUrl: './todo-list-item.component.html',
    styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {

    /*
    * @HostBinding is Decorator that set property (class) on the component that hosts the directive.
    * */
    @HostBinding('class') class = 'list-group-item';

    /*
    * Inputs provide a mechanism to allow a parent component to bind properties that a child component.
    * can have access to. The parent component pushes the properties to the child component.
    * */
    @Input() todoItem: ITodoListItem;

    /*
    * Outputs provide a mechanism for a child (this) component to emit events up to its parent component.
    * updateToComplete Output, which will emit when user select check-box.
    * */
    @Output() updateToComplete: EventEmitter<number> = new EventEmitter<number>();

    /*
    * Outputs provide a mechanism for a child (this) component to emit events up to its parent component.
    * updateToNotComplete Output, which will emit when user deselect check-box.
    * */
    @Output() updateToNotComplete: EventEmitter<number> = new EventEmitter<number>();

    /*
    * Outputs provide a mechanism for a child (this) component to emit events up to its parent component.
    * deleteTodo Output, which will emit when user click on Delete Button.
    * */
    @Output() deleteTodo: EventEmitter<number> = new EventEmitter<number>();

    /*
    * onIsCompleteChange method is bind with Checkbox input with (change) event
    *   1. this method will emit updateToNotComplete output if check box deselected.
    *   2. this method will emit updateToComplete output if check box selected.
    * */
    onIsCompleteChange() {
        if (this.todoItem.isCompleted) {
            this.updateToNotComplete.emit(this.todoItem.id);
        } else {
            this.updateToComplete.emit(this.todoItem.id);
        }
    }

    /*
    * onIsCompleteChange method is bind with Delete Button with (click) event
    *   1. this method will emit deleteTodo,
    * */
    deleteTodoItem() {
        const isConfirmed = confirm('Are you sure do you want to delete?');
        if (isConfirmed) {
            this.deleteTodo.emit(this.todoItem.id);
        }
    }
}
