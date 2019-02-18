import React, { Component } from 'react';
import imagesUrls from './images'
import Gallery from './components/Gallery'
import styles from './App.css'

class App extends Component {
  render() {
    return (
      <div className="page">

        <div className="gallery-slider-wrapper">
            <Gallery images={imagesUrls} />
        </div>

      </div>
    );
  }
}

export default App;
