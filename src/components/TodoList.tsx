import TodoItem from './TodoItem';
import type { Todo } from '../data/Type';

interface ToDoListParams {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}


function TodoList({ todos, toggleTodo, deleteTodo }: ToDoListParams) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}
export default TodoList;
