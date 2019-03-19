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
      <ul className="filters">
        <li>
          <button className="filters__filter filters__filter--html" onClick={this.onClickHandler('html')}>HTML</button>
        </li>
        <li>
          <button className="filters__filter filters__filter--css" onClick={this.onClickHandler('css')}>CSS</button>
        </li>
        <li>
          <button className="filters__filter filters__filter--js" onClick={this.onClickHandler('javascript')}>JS</button> 
        </li>
      </ul>
    );
  }
}

export default Filter;