import React from 'react';
import DeleteButton from "./DeleteButton.js";
import '../App.css';


export default function List (props){
    const {items, heading, onClickEvent, key} = props;
  return (
    <div className = "List">
        <h1>{heading}</h1>
      <ul>
          {items.map((item, index) => (
          <li key={key}>{item}
         
          <DeleteButton onClickEvent={onClickEvent}/>
          </li>
          
          ))}
      </ul>
    </div>
  );
};
 
