import React from 'react';
import NextButton from "./NextButton.js";
import SaveButton from "./SaveButton.js";
import '../App.css';

export default function NavBar(props){
    const {onSaveEvent, onClickEvent} = props;

    return(
        <div className="Nav-Div">
        <SaveButton onClickEvent={onSaveEvent}/>
        <NextButton onClickEvent={onClickEvent}/>
      </div>
    );
}