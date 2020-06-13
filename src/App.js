import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';


import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venue NFO'
import Highlights from './components/Highlights'

class App extends Component {
  render() {
    return (
      <div className="App" >

        <Header />
        <Element name="featured">
          <Featured />
        </Element>
        <VenueNfo />
        <Highlights />




      </div>


    );
  }
}
export default App;

