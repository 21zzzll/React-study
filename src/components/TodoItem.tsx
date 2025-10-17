function TodoItem(props: any) {
  return (
    <li style={{textDecoration: props.todo.completed ? 'line-through' : 'none'}}>

      <span>{props.todo.title}</span>
      <button onClick={() => props.toggleTodo(props.todo.id)}>
        {props.todo.completed ? '取消' : '完成'}
      </button>
      <button onClick={() => props.deleteTodo(props.todo.id)}>删除</button>

    </li>

  );
}
export default TodoItem;
