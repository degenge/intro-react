import React from "react";
import logo from "./logo.svg";

export default function Header() {
    return (
        <header className="App-header flex items-center justify-between flex-wrap bg-gray-900 p-6" >
            <img src={logo} className="App-logo" alt="logo" />
            <p className="text-teal-500">My Todo App</p>
        </header >
    );
}
