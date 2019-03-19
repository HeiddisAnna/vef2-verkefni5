import React, { Component } from 'react'
import { getLecture } from '../../api';

import Item from '../../components/item/Item';
import Header from '../../components/header/Header';

export default class Lecture extends Component {

  state = {
    lecture: getLecture(this.props.match.params.slug),
  }

  render() {
    const { lecture } = this.state;

    console.log(this.props.match.params.slug);

    return (
      <React.Fragment>
        <Header category="Vefforritun" title="html-sagan" />
        
        <div className="lecture__col">
          { lecture.map((item, i) => 
            <Item key={i} item={item} /> 
          ) }  
        </div>
      </React.Fragment>
    )
  }
}
