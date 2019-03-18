import React, { Component } from 'react'
import { getLecture } from '../../api';

import Item from '../../components/item/Item';
import Header from '../../components/header/Header';

export default class Lecture extends Component {

  state = {
    lecture: getLecture('html-sagan'),
  }

  render() {
    const { lecture } = this.state;

    return (
      <React.Fragment>
        <Header category="Vefforritun" title="html-sagan" />
        
        <div>
            { lecture.map((item, i) => 
                <Item key={i} item={item} /> // Þetta er það sem við tiljum gera. Hafa bara link
            ) }
            
        </div>
      </React.Fragment>
    )
  }
}
