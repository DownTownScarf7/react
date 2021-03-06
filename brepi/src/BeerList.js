import React, { Component } from 'react';
import Beer from './Beer';

export default class BeerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerCount: props.beers.length,
    }
  }

  getBeers = arr => {
    if (arr.length > 0) {
      const temp = arr.map(beer => {
        return (
          <Beer
            key={beer.id}
            name={beer.name} 
            tagLine={beer.tagline} 
            description={beer.description}
            imgSrc={beer.image_url}
          />
        );
      });
      console.log(temp);
      return temp;
    }
  }

  render() {
    return (
      <div className="beerlist-wrapper">
        <ul className="beer-ul">
          {this.getBeers(this.props.beers)}
        </ul>
      </div>
    );
  }
}