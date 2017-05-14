import React, { Component } from 'react';
import ProfilePage from '../ProfilePage';
import './index.css';

import Item from '../Item';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProfilePage />
        <Item 
          src="https://bonobos-prod-s3.imgix.net/products/37859/original/o4mfbriti1hq33q0kfpkeesxgov44wuu.jpg?1486998408=&auto=format%2Ccompress&dpr=1&q=75&crop=false&fit=clip&w=300&h=1"
        />
      </div>
    );
  }
}

export default App;
