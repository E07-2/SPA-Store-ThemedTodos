import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext'

function TodoListItem({ todo, deleteTodo }) {

    const { user, setUser } = useContext(UserContext);

    const mine = todo.user === user.id;
    const theme = "lightblue"
    return(
        <li className={mine ? "my-todo " + theme : theme}>
            {todo.done ? "✓ " : "○ "}
            {todo.text}
            {mine &&
                <button onClick={() => deleteTodo(todo)}>
                    delete
                </button>
            }
        </li>
    );
}

export default TodoListItem;