import { useEffect, useState } from 'react'
import './App.css'
import { TodosProvider } from "./Contexts/Todos"
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])
  
  const addTodo = (todo) => {
    setTodos((prev) => [ {id: Date.now(), ...todo} , ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => (prev.map((prevTodo)  =>  (prevTodo.id === todo.id ? todo :prevTodo))))
  }
    
  const deleteTodo = (id) => {
    setTodos((prev) => (prev.filter((prevTodo) => (prevTodo.id !== id ))))
  }
  const toggleComplete = (id) => {
    setTodos((prev) => 
      prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
    )
  }

  useEffect(() => {
   const todos = JSON.parse(localStorage.getItem('todos'))
   if(todos && todos.length > 0) {
     setTodos(todos)
   }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  

  return (
      <TodosProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}> 
      <div className="h-100 w-className mt-14 flex items-center justify-center font-sans">
      <TodoForm/>
      </div>
      <div className="mb-4 flex gap-4 flex-col items-center">
        <h1>All todos here-</h1>
    {todos.map((todo) => (
        <div className='' key={todo.id}>
          <TodoItem todo={todo} />
        </div>
      ))}
      </div>
      </TodosProvider>
  )
}

export default App
