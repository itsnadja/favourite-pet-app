import React from 'react';
import DeleteButton from "./DeleteButton.js";
import ImgElement from "./ImgElement.js";
import '../App.css';


export default function ListItem (props){
    const {items, onClickEvent, key} = props;
  return (
    <div>
          <li key={key}>

          <ImgElement items = {items}/>
  
          <DeleteButton onClickEvent={onClickEvent}/>
          </li>      
 
    </div>
  );
};
 
