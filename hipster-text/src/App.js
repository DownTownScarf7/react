import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 4,
      html: true,
      text: '',
    };
  }

  componentWillMount() {
    axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${this.state.paras}&format=${this.state.html ? 'html' : 'text'}`)
      .then(res => {
        this.setState({text: res.data.text}, function() {console.log(this.state)});
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        Hello
      </div>
    );
  }
}

export default App;
