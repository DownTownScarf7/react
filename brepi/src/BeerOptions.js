import React, { Component } from 'react';

export default class BeerOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerCount: 6,
    };
  }

  beerCountOnChange = event => {
    this.setState({
      beerCount: +event.target.value,
    });
  }

  sendOnClick = () => {
    console.log(this.state.beerCount);
  }

  render() {
    return (
      <div className="options-wrapper">
        <input className="beerSearch" type="text" autoFocus />
        <input className="beerCount" type="range" min="6" max="20" value={this.state.beerCount} onChange={this.beerCountOnChange}/>
        <button className="btn send" onClick={this.sendOnClick} >OK</button>
      </div>
    );
  }
}
