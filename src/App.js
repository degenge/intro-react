import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

const ListTitle = () => {
    return (
        <h3 className="text-2xl font-bold leading-7 text-gray-900" >Todos</h3 >
    )
}

const List = () => {
    return (
        <ul >
            <li >
                <label className="md:w-2/3 block text-gray-500 font-bold" >
                    <input className="mr-2 leading-tight" type="checkbox" />
                    <span className="text-sm" >Teach Symfony</span >
                </label >
            </li >
            <li >
                <label className="md:w-2/3 block text-gray-500 font-bold" >
                    <input className="mr-2 leading-tight" type="checkbox" />
                    <span className="text-sm" >Send newsletter</span >
                </label >
            </li >
        </ul >
    )
}

const Section = () => {
    return (
        <section className="p-6 " >
            <ListTitle />
            <List />
        </section >
    )
}


function App() {
    return (
        <div className="bg-gray-100" >
            <Header />
            <Form />
            <Section />
            <Footer />
        </div >
    );
}

export default App;
