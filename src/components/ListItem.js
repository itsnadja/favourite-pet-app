import React from 'react';
import DeleteButton from "./DeleteButton.js";
import '../App.css';


export default function ListItem (props){
    const {item, onClickEvent, key} = props;
  return (
    <div>
          <li key={key}>{item}
          <DeleteButton onClickEvent={onClickEvent}/>
          </li>      
 
    </div>
  );
};
 
