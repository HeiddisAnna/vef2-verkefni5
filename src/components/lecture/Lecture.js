import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Lecture extends Component {
     // sætkja react devtools extention í chrome !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  render() {
    const { lecture} = this.props;
    return (
      <Link to= {`/${lecture.slug}`}>
        <div className="list__col">
          <div className="listItem__image">
            <img src= {`${lecture.thumbnail}`} alt=''></img>
          </div>
          <div className="listItem__bottom">
            <div className="listItem__text">
                <span className="listItem__category"> {lecture.category} </span>
                <h1 className="listItem__title"> {lecture.title} </h1>
            </div>
          </div>
        </div>
      </Link>
      
    );
  }
}

export default Lecture;