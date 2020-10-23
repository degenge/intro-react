import React from "react";
import logo from "./logo.svg";

export default function Header() {
    return (
        <header className="App-header flex items-center flex-wrap bg-gray-900 p-6" >
            <img src={logo} className="App-logo " alt="logo" />
            <h2 className="text-2xl text-blue-500">My Todo App</h2>
        </header >
    );
}
