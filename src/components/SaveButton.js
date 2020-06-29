import React from 'react';
import Heart from "../heart.svg"
import '../App.css';

export default function SaveButton(props){
    const {onClickEvent} = props

    function handleClick(){
        if (typeof onClickEvent === "function") onClickEvent();
    }
    return(
        <div>
             <img 
             src={Heart} 
             alt="SaveButton" 
             className = "saveBtn"
             onClick={handleClick}/>
           {/* <button className = "saveBtn" onClick={handleClick}>Save</button>*/}
        </div>
    );
}