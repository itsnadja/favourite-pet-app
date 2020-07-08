import React from 'react';
import '../App.css';

export default function ImgElement(props){
    const {items} = props;

    return(
        <div>
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
        </div>
    )
}