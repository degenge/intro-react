import React, {useRef} from "react";

export default function Form() {

    const inputRef = useRef();

    function clickHandler() {

        const name = inputRef.current.value;
        if (name === '') return;
        console.log(name);
        setTodos(prevTodos => {
            return [...prevTodos, {id: 1, name: name, complete: false}]
        })
        inputRef.current.value = '';
    }

    return (
        <div className="flex items-center justify-between flex-wrap p-6 border-b-2" >
            <input type="text" ref={inputRef} placeholder="Write a new todo"
                   className="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            <button value="Submit" onClick={clickHandler}
                    className=" form__button hover:bg-blue-500 hover:text-white  hover:border-transparent " >
                Submit
            </button >
        </div >
    );

}