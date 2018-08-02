import React from 'react';

export default function Beer(props) {
  return (
    <div className="beer-wrapper">
      <h3>{this.props.name}</h3>
      <p>{this.props.tagLine}</p>
      <img src={this.props.imgSrc} alt={`${this.props.name}.png`}/>
      <div className="description-wrapper">
        <p>{this.props.description}</p>
      </div>
    </div>
  );
}