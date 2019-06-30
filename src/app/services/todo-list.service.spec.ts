import {TestBed} from '@angular/core/testing';

import {TodoListService} from './todo-list.service';

describe('TodoListService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: TodoListService = TestBed.get(TodoListService);
        expect(service).toBeTruthy();
    });
    it('addTodo should add item into todoList', () => {
        const service: TodoListService = TestBed.get(TodoListService);
        service.addTodo({id: 1, isCompleted: true, title: 'Test'});
        expect(service.todoList.length).toEqual(1);
    });
    it('updateToNotComplete should update todoList[0].isCompleted = false', () => {
        const service: TodoListService = TestBed.get(TodoListService);
        service.todoList = [
            {id: 1, title: 'Test', isCompleted: true}
        ];
        service.updateToNotComplete(1);
        expect(service.todoList[0].isCompleted).toEqual(false);
    });
    it('updateToNotComplete should update todoList[0].isCompleted = true', () => {
        const service: TodoListService = TestBed.get(TodoListService);
        service.todoList = [
            {id: 1, title: 'Test', isCompleted: false}
        ];
        service.updateToComplete(1);
        expect(service.todoList[0].isCompleted).toEqual(true);
    });
    it('deleteTodo should delete item in service.todoList', () => {
        const service: TodoListService = TestBed.get(TodoListService);
        service.todoList = [
            {id: 1, title: 'Test', isCompleted: false}
        ];
        service.deleteTodo(1);
        expect(service.todoList.length).toEqual(0);
    });

    it('handling else case for deleteTodo, updateToComplete, updateToNotComplete', () => {
        const service: TodoListService = TestBed.get(TodoListService);
        service.todoList = [
            {id: 1, title: 'Test', isCompleted: false}
        ];
        expect(service.deleteTodo(0)).toEqual(undefined);
        expect(service.updateToComplete(0)).toEqual(undefined);
        expect(service.updateToNotComplete(0)).toEqual(undefined);
    });

});
