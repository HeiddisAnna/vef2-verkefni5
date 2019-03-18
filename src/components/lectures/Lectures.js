import React, { Component } from 'react';

import Lecture from '../../components/lecture/Lecture';

import './list.scss';


class Lectures extends Component {
     // sætkja react devtools extention í chrome !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  render() {
    const { lectures } = this.props;
    return (
      <div className="list">
        <div className="list__row">
          { lectures.map((lecture, i) => 
            <Lecture key={i} lecture={lecture} /> // Þetta er það sem við tiljum gera. Hafa bara link
          ) }
        </div>
      </div>
    );
  }
}

export default Lectures;