import React from 'react';
import '../App.css';

export default function DeleteButton(props){
    const {onClickEvent} = props;

    function handleClick(){
        if (typeof onClickEvent === "function") onClickEvent();
    }

    return(
        <span>
            <button className="delBtn" onClick={handleClick}>X</button>
        </span>
    );
}