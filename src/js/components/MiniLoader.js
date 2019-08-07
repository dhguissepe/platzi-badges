import React, { Component } from 'react';

export default class MiniLoader extends Component {
  render() {
    return (
      <div className={`lds-grid mini-loader ${this.props.className}`}>
        <div />
        <div />
        <div />
      </div>
    );
  }
}