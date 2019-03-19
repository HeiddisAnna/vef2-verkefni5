import React, { Component } from 'react'
import { getLecture, toggleLectureFinish, loadSavedLectures } from '../../api';

import Item from '../../components/item/Item';
import Header from '../../components/header/Header';

export default class Lecture extends Component {

  state = {
    lecture: getLecture(this.props.match.params.slug),
  }

  markFinished = (slug) => (e) => {
    console.log('Ýtti á að klára fyrirlestur');
    const { target } = e;
    const isFinished = target.classList.contains('lecture__finish--finished');
    if (isFinished) {
      target.textContent = 'Klára fyrirlestur';
    } else {
      target.textContent = '✓ Fyrirlestur kláraður';
    }

    target.classList.toggle('lecture__finish--finished');
    toggleLectureFinish(slug, !isFinished);
    this.setState({ lecture : getLecture(this.props.match.params.slug)});
  }

  checkFinished = (slug) => {
    const saved = loadSavedLectures();
    return saved.indexOf(slug) >= 0;
  }

  render() {
    const { lecture } = this.state;
    const { content } = lecture;
    const { finished } = lecture;

    console.log(this.props.match.params.slug);
    const slug = this.props.match.params.slug;

    return (
      <React.Fragment>
        <Header category="Vefforritun" title="html-sagan" />
        
        <div className="lecture__col">
          { content.map((item, i) => 
            <Item key={i} item={item} /> 
          ) }  
        </div>
        <footer className="lecture__footer">

          {console.log(finished)};
          {finished? 
            <button onClick={this.markFinished(slug)} className="lecture__finish lecture__finish--finished">✓ Klára fyrirlestur</button>
            :
            <button onClick={this.markFinished(slug)} className="lecture__finish">Klára fyrirlestur</button>
          }
          
          <a className="lecture__back" href="/">Til baka</a>
        </footer>
      </React.Fragment>
    )
  }
}
