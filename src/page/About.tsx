import AddTodo from '../components/add-todo'
import TodoList from '../components/todo-list'
import TodoFilter from '../components/todo-filter'
import type { Todo } from '../data/type'
import { useState } from 'react'

//关于页-待办事项列表（

const About = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState('all')
  //新增代办
  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }
  //删除代办
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  //切换事项状态
  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }
  //筛选事项
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true
    if (filter === 'completed') return todo.completed
    if (filter === 'active') return !todo.completed
    return true
  })

  return (
    <div className="about-page">
      <h1>TodoList</h1>
      <AddTodo addTodo={addTodo}></AddTodo>
      <TodoList todos={filteredTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}></TodoList>
      <TodoFilter filter={filter} setFilter={setFilter}></TodoFilter>
    </div>
  )
}
export default About
