import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoListComponent} from './todo-list.component';
import {TodoListItemComponent} from '../todo-list-item/todo-list-item.component';

describe('TodoListComponent', () => {
    let component: TodoListComponent;
    let fixture: ComponentFixture<TodoListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TodoListComponent,
                TodoListItemComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
