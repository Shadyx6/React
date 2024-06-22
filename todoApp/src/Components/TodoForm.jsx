import React from 'react'
import { useState } from 'react'
import { useTodo } from '../Contexts/Todos'

function TodoForm() {
    const [todo,setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()
        if(!todo) return 
        addTodo({todo, completed: false})
       setTodo('')
    }

  return (
    <>
    <form onSubmit={add}>
     <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>
            <div className="flex mt-4">
                <input onChange={(e) => setTodo(e.target.value)}
                value={todo}
                 className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" />
                
                <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Add</button>
            </div>
        </div>
        </form>
    </>
  )
}

export default TodoForm