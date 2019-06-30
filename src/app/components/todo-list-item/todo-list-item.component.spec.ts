import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoListItemComponent} from './todo-list-item.component';

describe('TodoListItemComponent', () => {
    let component: TodoListItemComponent;
    let fixture: ComponentFixture<TodoListItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TodoListItemComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoListItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('onIsCompleteChange will emit updateToComplete if isCompleted == true', () => {
        component.updateToComplete.subscribe((id: number) => {
            expect(id).toEqual(1);
        });
        component.todoItem = {id: 1, title: 'Test', isCompleted: true};
        component.onIsCompleteChange();
    });

    it('onIsCompleteChange will emit updateToNotComplete if isCompleted == false', () => {
        component.updateToNotComplete.subscribe((id: number) => {
            expect(id).toEqual(1);
        });
        component.todoItem = {id: 1, title: 'Test', isCompleted: false};
        component.onIsCompleteChange();
    });

    it('deleteTodoItem will call deleteTodo.emit', () => {
        window.confirm = (message) => {
            expect(message).toEqual('Are you sure do you want to delete?');
            return true;
        };
        component.deleteTodo.subscribe((id: number) => {
            expect(id).toEqual(1);
        });
        component.todoItem = {id: 1, title: 'Test', isCompleted: false};
        component.deleteTodoItem();
    });

    it('deleteTodoItem will return undefined', () => {
        window.confirm = (message) => {
            expect(message).toEqual('Are you sure do you want to delete?');
            return false;
        };
        component.todoItem = {id: 1, title: 'Test', isCompleted: false};
        expect(component.deleteTodoItem()).toEqual(undefined);
    });
});
