import { useState } from 'react';
import TodoListItem from './TodoListItem';
import CreateTodo from './CreateTodo';
import './TodoList.scss'

const defaultTodos = [
    { id: 58477, user: 1, text: "Wash dishes", done: false },
    { id: 64851, user: 1, text: "Bake a cake", done: true },
    { id: 59858, user: 2, text: "Make a website", done: true },
];

function TodoList() {
    const [todos, setTodos] = useState(defaultTodos);

    function deleteTodo(todo) {
        const newTodos = todos.filter(f => f.id !== todo.id);
        setTodos(newTodos);
    }

    function createTodo(todo) {
        setTodos([...todos, todo]);
    }

    return (
        <div className="todos">
            <CreateTodo createTodo={createTodo} />
            <ul>
                {todos.map(todo =>
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                    />
                )}
            </ul>
        </div>
    );
}

export default TodoList;