import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Form from "./Form";
import Section from "./Section";
import Footer from "./Footer";

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
