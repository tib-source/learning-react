import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from "react";



function Square() {

    return (
        <button className='square'>
            X
        </button>
    );
}

let App = function MyApp() {

    let board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]
    let count = 0
    return (

        <div>
                <Square/>

            <h1>Meow</h1>
            {board.map((item) => {
                <li>meow</li>
            })}
            {/* {board.map( (list) => { 
                <div key={board.indexOf(list)}>
                    {list.map(item => {
                         <Square key={list.indexOf(item
                            )}/>
                    })}
                </div>
            })} */}
        </div>
    );
}


const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);