import React from 'react';
import './reset.css';
import './App.css';
import About from "./components/About/About";
import Main from "./components/Main/Main";
import Posts from "./components/Posts/Posts";
import {SliderData} from "./components/Posts/SliderData";
import Social from "./components/Social/Social";

const App = () => {
    return (
        <div className='wrap'>
            <Main />
            <About />
            <Posts slides={SliderData}/>
            <Social />
        </div>
    );
}

export default App;
