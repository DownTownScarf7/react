import React from 'react';

export default function Beer(props) {
  return (
    <li className="beer-wrapper">
      <div>
      <h3>{props.name}</h3>
      </div>
      <div>
      <p>{props.tagLine}</p>
      <img className="beerpic" src={props.imgSrc} alt={`${props.name}.png`}/>
      <div className="description-wrapper">
        <p>{props.description}</p>
      </div>
      </div>
    </li>
  );
}