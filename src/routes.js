import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import DressingRoom from './components/DressingRoom';
import ItemList from './components/ItemList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

export default (
  <div>
    <Route exact path="/" component={App} />
    <Route path="/room" component={DressingRoom} />
    <Route path="/room/:category" component={ItemList} />
    <Route path="/cart" component={Cart} />
    <Route path="/checkout" component={Checkout} />
  </div>
);
