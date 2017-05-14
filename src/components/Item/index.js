import React, { Component } from 'react'
import './index.css'

class Item extends Component {
  constructor({props}) {
    super(props);
    this.state = { selected: false };
  }



  render() {
    const { selected } = this.state;
    const style = selected ? "selectedDiv" : ""
    return (
    <div onClick={()=>this.setState({selected: !selected})}>
      <img className={style} src={this.props.src} height="150" width="150" />
    </div>
  ); 
  }  
}

export default Item;