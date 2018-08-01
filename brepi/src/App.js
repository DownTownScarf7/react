import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.getBeers();
  }

  getBeers() {
    fetch('https://api.punkapi.com/v2/beers')
      .then(res => {
        res.json().then(data => {
          console.log(data);
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
        Test
      </div>
    );
  }
}

export default App;
