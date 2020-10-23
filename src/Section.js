import React from "react";

export default function Section({todos, toggleTodo}) {

    function handleTodoClick(id) {
        toggleTodo(id);
    }

    return (
        <>
            <section className="w-full max-w-sm p-6 " >
                <h3 className="text-2xl font-bold leading-7 text-gray-900" >Todos</h3 >
                <ul >
                    {todos.map((todo) => (
                        <li key={todo.id} >
                            <label className="md:w-2/3 block text-gray-500 font-bold" >
                                <input type="checkbox" checked={todo.complete} onChange={() => handleTodoClick(todo.id)}
                                       className="mr-2 " />
                                <span className="text-sm" >{todo.name}</span >
                            </label >
                        </li >
                    ))}
                </ul >
            </section >
        </>
    )
}