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
      beerCount: 6,
    }
  }

  componentDidMount = () => {
    this.getBeers();
  }

  getBeers = () => {
    fetch(`https://api.punkapi.com/v2/beers?page=${this.state.pageCount}&per_page=${this.state.beerPerPage}`)
      .then(res => {
        res.json()
        .then(data => {
          console.log('DATA:', data); // DEBUG
          this.setState({
            beers: data,
          });
        }).catch(err => {
          console.error(err);
        });
      }).catch(err => {
        console.error(err);
      });
  }

  sendOnClick = sliderValue => {
    this.setState({
      beerCount: sliderValue,
    });
  }

  render() {
        //<BeerOptions beerCountOnChange={/*this.beerCountOnChange*/ () => {console.log('asd');}} beerCount={this.state.beerCount} sendOnClick={/*this.sendOnClick*/() => { console.log('RENDERED') }}/>
    return (
      <div className="App">
        <BeerList beers={this.state.beers}/>
        <div className="pagination-wrapper">
          {/* todo: PAGE BUTTONS */}
        </div>
      </div>
    );
  }
}

export default App;
