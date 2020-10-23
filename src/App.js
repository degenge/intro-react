import React, {useRef, useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./Header";
// import Form from "./Form";
import Section from "./Section";
import Footer from "./Footer";
import {v4 as uuidv4} from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {

    const initialTodos = [];
    const [todos, setTodos] = useState(initialTodos);
    const inputRef = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedTodos) setTodos(storedTodos);
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos])

    function toggleTodo(id) {
        const newTodos = [...todos];
        const todo = newTodos.find(todo => todo.id === id);
        todo.complete = !todo.complete;
        setTodos(newTodos);
    }

    function handleAddTodo() {

        const name = inputRef.current.value;
        if (name === '') return;
        setTodos(prevTodos => {
            return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
        })
        inputRef.current.value = '';
    }

    function handleClearTodos() {
        const newTodos = todos.filter(todo => !todo.complete);
        setTodos(newTodos);
    }

    return (
        <>
            <div className="flex flex-col items-center h-screen bg-grey-300" >
                <Header />

                <div>{todos.filter(todo => !todo.complete).length} left to do</div>

                <div className="flex items-center justify-between flex-wrap p-6 border-b-2" >
                    <input type="text" ref={inputRef} placeholder="Write a new todo"
                           className="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <button value="Submit" onClick={handleAddTodo}
                            className=" form__button hover:bg-blue-500 hover:text-white  hover:border-transparent " >
                        Add todo
                    </button >
                    <button value="Submit" onClick={handleClearTodos}
                            className=" form__button hover:bg-blue-500 hover:text-white  hover:border-transparent " >
                        Clear complete
                    </button >
                </div >

                <Section todos={todos} toggleTodo={toggleTodo} />
                <Footer />
            </div >
        </>
    );
}

export default App;
