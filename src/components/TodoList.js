import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos}) =>{
    const todoList = todos.map(todo => (
        <TodoItem
            id={todo.id}
            key={todo.id}
            checked={todo.checked}
            text={todo.text}
        />
    ));
    return todoList
};
export default TodoList;