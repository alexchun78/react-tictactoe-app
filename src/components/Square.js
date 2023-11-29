import React, { Component } from 'react';
import './Square.css';

export default class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:null,
    };
  }

  onClickEvent(e){
    this.setState({value:'X'}); 
    console.log(this.state.value);
  }

  render() {
    return (
      <button className="square" onClick={(e)=>this.onClickEvent(e)}>
        {this.state.value}
      </button>
    ) 
  }
}
