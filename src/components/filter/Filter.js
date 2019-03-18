import React, { Component } from 'react';

import './filters.scss';


class Filter extends Component {
    state = {
        active: [],
    }


    onClickHandler = (type) => (e) => {
      const { active } = this.state;
      const { onFilter } = this.props;

      if (active.includes(type)) {
        active.splice(type);
      }
      active.push(type);
      console.log(active);

      onFilter(active);
    }

  render() {
    return (
      <div className="Filter">
        <button onClick={this.onClickHandler('html')}>HTML</button>
        <button onClick={this.onClickHandler('css')}>CSS</button>
        <button onClick={this.onClickHandler('javascript')}>JS</button> 
      </div>
    );
  }
}

export default Filter;