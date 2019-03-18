import React, { Component } from 'react'
import Lecture from '../lecture/Lecture';

import './item.scss';

export default class Item extends Component {

  render() {
      const { item } = this.props;
    return (
      <div className="lecture__col">
        <div className="lecture__content">
          <div>{item.data}</div>
        </div>
      </div>
    )
  }
}
