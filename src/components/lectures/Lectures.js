import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Lecture from '../../components/lecture/Lecture';


class Lectures extends Component {
     // sætkja react devtools extention í chrome !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  render() {
    const { lectures } = this.props;
    return (
      <div>
          { lectures.map((lecture, i) => 
            <Lecture lecture={lecture} /> // Þetta er það sem við tiljum gera. Hafa bara link
            // <p key={i}>{lecture.slug}</p>
          ) }
      </div>
    );
  }
}

export default Lectures;