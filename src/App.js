import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';


import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venue NFO'

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", background: 'cornflowerblue' }}>

        <Header />
        <Element name="featured">
          <Featured />
        </Element>
        <VenueNfo />



      </div>


    );
  }
}
export default App;

