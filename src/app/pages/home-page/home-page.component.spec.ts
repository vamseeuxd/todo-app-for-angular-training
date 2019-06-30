import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomePageComponent} from './home-page.component';
import {AddTodoComponent} from '../../components/add-todo/add-todo.component';
import {TodoListComponent} from '../../components/todo-list/todo-list.component';
import {TodoListItemComponent} from '../../components/todo-list-item/todo-list-item.component';
import {FormsModule} from '@angular/forms';
import {ITodoListItem} from '../../interfaces/i-todo-list.item';

describe('HomePageComponent', () => {
    let component: HomePageComponent;
    let fixture: ComponentFixture<HomePageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [
                HomePageComponent,
                AddTodoComponent,
                TodoListComponent,
                TodoListItemComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('addTodoItem should call todoListService.addTodo', () => {
        component.todoListService.addTodo = (newTodoItem: ITodoListItem) => {
            expect(newTodoItem.id).toEqual(1);
        };
        component.addTodoItem({id: 1, isCompleted: true, title: 'test'});
    });

    it('updateToComplete should call todoListService.updateToComplete', () => {
        component.todoListService.updateToComplete = (id: number) => {
            expect(id).toEqual(1);
        };
        component.updateToComplete(1);
    });

    it('updateToNotComplete should call todoListService.updateToNotComplete', () => {
        component.todoListService.updateToNotComplete = (id: number) => {
            expect(id).toEqual(1);
        };
        component.updateToNotComplete(1);
    });

    it('deleteTodo should call todoListService.deleteTodo', () => {
        component.todoListService.deleteTodo = (id: number) => {
            expect(id).toEqual(1);
        };
        component.deleteTodo(1);
    });
});

/*123*/
