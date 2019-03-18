import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Lecture extends Component {
     // sætkja react devtools extention í chrome !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  render() {
    const { lecture} = this.props;
    return (
      <div>
          <p>{lecture.slug}</p>
      </div>
    );
  }
}

export default Lecture;