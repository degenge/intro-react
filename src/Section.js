import React, { useState } from "react";

const ListTitle = () => {
    return (
        <h3 className="text-2xl font-bold leading-7 text-gray-900" >Todos</h3 >
    )
}

const List = () => {
    const initialTodos  = ["Teach Tailwindcss",  "Teach Symfony", "Maybe teach React"];
    const [todos, setTodos] = useState(initialTodos);
    
    return (
        <ul >
            {todos.map((todo) => (
                <li>
                    <label className="md:w-2/3 block text-gray-500 font-bold" >
                        <input className="mr-2 leading-tight" type="checkbox" />
                        <span className="text-sm" >{todo}</span >
                    </label >

                </li>
            ))}
        </ul >
    )
}

function Section() {
    return (
        <section className="p-6 " >
            <ListTitle />
            <List />
        </section >
    )
}

export default Section;