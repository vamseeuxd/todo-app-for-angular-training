import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddTodoComponent} from './add-todo.component';
import {ITodoListItem} from '../../interfaces/i-todo-list.item';
import {FormsModule} from '@angular/forms';

describe('AddTodoComponent', () => {
    let component: AddTodoComponent;
    let fixture: ComponentFixture<AddTodoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [
                AddTodoComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddTodoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('emitAddClick will emit addClick EventEmitter if component.toDoTitle.trim().length > 0', () => {
        component.addClick.subscribe((value: ITodoListItem) => {
            expect(value.title).toEqual('test');
        });
        component.toDoTitle = 'test';
        component.emitAddClick();
    });

    it('emitAddClick will return undefined', () => {
        component.toDoTitle = '';
        expect(component.emitAddClick()).toEqual(undefined);
    });

});
