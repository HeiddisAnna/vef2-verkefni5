import React, { Component } from 'react'
import Lecture from '../lecture/Lecture';

import './item.scss';

export default class Item extends Component {

  makeElement(item){
    switch (item.type) {
      case 'youtube':
        return ( 
          <div className="item item--youtube">
            <div className="item__content">
              <iframe className="item__iframe" src= {`${item.data}`}></iframe>
            </div>
          </div>
        )
        break;
      case 'text':
        return (
          <div className="item item--text">
            <div className="item__content">
              {item.data.split('\n').map((text, i) => (
                <p className="item__text">{text}</p>
              ))};
              <p className="item__text">{item.data}</p>
            </div>
          </div>
        )
        break;
      case 'list':
        return (
          <div className="item item--list">
            <div className="item__content">
              <ul className="item__ul">
                {item.data.map((liItem, i) => (
                 <li className="item__li">{liItem}</li> 
                ))}
              </ul>
            </div>
          </div>
        )
        break;
      case 'heading':
        return (
          <div className="item item--heading">
            <div className="item__content">
              <h3 className="item__heading">{item.data}</h3>
            </div>
          </div>
        )
        break;
      case 'code':
        return (
          <div className="item item--code">
            <div className="item__content">
              <pre className="item__code">{item.data}</pre>
            </div>
          </div>
        )
        break;
      case 'quote':
        return (
          <div className="item item--blockquote">
            <div className="item__content">
              <blockquote>
                <p className="item__quote">{item.data}</p>
                <p className="item__attribute">{item.attribute}</p>
              </blockquote>
            </div>
          </div>
        )
        break;
      case 'image':
        return (
          <div className="item item--image">
            <div className="item__content">
              <div>
                <img className="image__img" alt={item.caption} src={`${item.data}`}></img>
                <p className="item__caption">{item.caption}</p>
              </div>
            </div>
          </div>
        )
        break;
      default:
        return (<div>item.data</div>)
    }
  }

  render() {
    const { item } = this.props;
    return (
      <div className="lecture__content" > {this.makeElement(item)}</div> 
    )
  }
}
