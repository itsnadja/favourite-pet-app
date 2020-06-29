import React from 'react';
import '../App.css';

export default function NextButton(props){
    const {onClickEvent} = props

    function handleClick(){
        if (typeof onClickEvent === "function") onClickEvent();
    }
    return(
        <div>
            <button className = "nextBtn" onClick={handleClick}>{">"}</button>
        </div>
    );
}