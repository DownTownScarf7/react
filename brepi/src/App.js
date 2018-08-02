import React, { Component } from 'react';
import BeerOptions from './BeerOptions';
import BeerList from './BeerList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageCount: 10,
      beerPerPage: 6,
      beers: [],
    }
  }

  componentDidMount() {
    this.getBeers();
  }

  getBeers() {
    fetch(`https://api.punkapi.com/v2/beers?page=${this.state.pageCount}&per_page=${this.state.beerPerPage}`)
      .then(res => {
        res.json()
        .then(data => {
          console.log('DATA:', data); // DEBUG
          this.setState({
            beers: data,
          });
        }).catch(err => {
          console.log(err);
        });
      }).catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <BeerOptions />
        <BeerList beers={this.state.beers}/>
        <div className="pagination-wrapper">
          {/* todo: PAGE BUTTONS */}
        </div>
      </div>
    );
  }
}

export default App;
