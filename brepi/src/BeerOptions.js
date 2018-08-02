import React from 'react';

export default function BeerOptions(props) {
  const sendOnClick = () => {
    console.log(props.beerCount);
  }

  return (
    <div className="options-wrapper">
      <input className="beerSearch" type="text" autoFocus />
      <input className="beerCount" type="range" min="6" max="20" value={props.beerCount} onChange={props.beerCountOnChange}/>
      <button className="btn send" onClick={sendOnClick} >OK</button>
    </div>
  );
}
