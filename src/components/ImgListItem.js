import React from 'react';
import DeleteButton from "./DeleteButton.js";
import '../App.css';


export default function ListItem (props){
    const {items, onClickEvent, key} = props;
  return (
    <div>
          <li key={key}>
            {items.map(function(item){
             if(item.toString().endsWith(".mp4") || item.toString().endsWith(".webm")){
              return(
                <video controls
                  src = {item} 
                  type="video/mp4"
                  className = "Pet-Image"
                >Sorry, can´t show video</video> 
              );
              }else{
                return(
                  <img
                  src={item}
                  alt="This is a pet."
                  className="Pet-Image"
                />   
                )}
            })}
            
          <DeleteButton onClickEvent={onClickEvent}/>
          </li>      
 
    </div>
  );
};
 
