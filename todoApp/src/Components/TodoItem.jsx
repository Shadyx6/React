import React, { useState } from 'react';
import { useTodo } from '../Contexts/Todos';

function TodoItem({ todo }) {
    const [isEditable, setIsEditable] = useState(false);
    const [todoItem, setTodoItem] = useState(todo.todo);

    const { updateTodo, deleteTodo, toggleComplete } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoItem });
        setIsEditable(false);
    };

    const toggleCompleteHandler = () => {
        toggleComplete(todo.id);
    };

    const handleDelete = () => {
        deleteTodo(todo.id); 
    };

    return (
        <>
        <div className="container flex gap-4 px-2 items-center justify-center bg-green-200">
        <input  className='h-4 w-4'
                type="checkbox"
                checked={todo.completed}
                onChange={toggleCompleteHandler}
            />
            <div className="flex items-center justify-center"> 
                
            <input 
                type='text'
                value={todoItem}
                onChange={(e) => setTodoItem(e.target.value)}
                className="w-full  bg-transparent text-grey-darkest"
                disabled={!isEditable} 
            />
            </div>
          
            <button
                onClick={() => {
                    if (todo.completed) return;
                    if (isEditable) {
                        editTodo();
                    } else {
                        setIsEditable((prev) => !prev);
                    }
                }}
                className="flex-no-shrink p-2 border-2 rounded  hover:bg-blue-200"
            >
                {isEditable ? '🔒' : '✏️'}
            </button>
            <button
                onClick={handleDelete} 
                className="flex-no-shrink p-2 rounded text-red border-red hover:text-white hover:bg-red-300"
            >
               🗑️
            </button>
        </div>
           
        </>
    );
}

export default TodoItem;
