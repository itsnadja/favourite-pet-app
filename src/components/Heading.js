import React from 'react';
import '../App.css';


export default function Heading (props){
    const {heading} = props;
  return (
    <div>
        <h1>{heading}</h1>
    </div>
  );
};
 
