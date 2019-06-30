import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {ITodoListItem} from '../../interfaces/i-todo-list.item';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

    /*
    * @HostBinding is Decorator that set property (class) on the component that hosts the directive
    * */
    @HostBinding('class') class = 'list-group';

    /*
    * Inputs provide a mechanism to allow a parent component to bind properties that a child component
    * can have access to. The parent component pushes the properties to the child component.
    * */
    @Input() todoList: ITodoListItem[] = [];

    /*
    * Outputs provide a mechanism for a child (this) component to emit events up to its parent component.
    * updateToComplete Output, which will emit when user select check-box
    * */
    @Output() updateToComplete: EventEmitter<number> = new EventEmitter<number>();

    /*
    * Outputs provide a mechanism for a child (this) component to emit events up to its parent component.
    * updateToNotComplete Output, which will emit when user deselect check-box
    * */
    @Output() updateToNotComplete: EventEmitter<number> = new EventEmitter<number>();

    /*
    * Outputs provide a mechanism for a child (this) component to emit events up to its parent component.
    * deleteTodo Output, which will emit when user click on Delete Button
    * */
    @Output() deleteTodo: EventEmitter<number> = new EventEmitter<number>();
}
