import React from "react";

function Form(){
    return (
        <form className="flex items-center justify-between flex-wrap p-6 border-b-2" >
            <input type="text" id="item" name="item"
                   className="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            <input type="submit" id="submit" value="Submit"
                   className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" />
        </form >
    );
};

export default Form;