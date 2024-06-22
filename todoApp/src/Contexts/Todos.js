import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Learn Reactt",
            completed: false
        }
    ],
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    toggleComplete: () => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodosProvider = TodoContext.Provider