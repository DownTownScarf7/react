import React from 'react';

export default function BeerOptions(props) {
  return (
    <div className="options-wrapper">
      <input className="beerSearch" type="text" autoFocus />
      slider = <input className="beerCount" type="range" min="6" max="20" value={props.beerCount} onChange={props.beerCountOnChange}/>
      <button className="btn send">OK</button>
    </div>
  );
}
