import React from 'react';

export default function Beer(props) {
  return (
    <li className="beer-wrapper">
      <h3>{props.name}</h3>
      <p>{props.tagLine}</p>
      <img src={props.imgSrc} alt={`${props.name}.png`}/>
      <div className="description-wrapper">
        <p>{props.description}</p>
      </div>
    </li>
  );
}