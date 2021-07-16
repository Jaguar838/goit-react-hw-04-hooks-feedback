import React, { Component } from 'react';

import { FeedbackOptions } from 'components/FeedbackOptions';
import { Section } from 'components/Section';
// import { Statistics } from 'components/Statistics';
// import { Notification } from 'components/Notification';

import {FEEDBACK_OPTIONS} from 'server/constants';

import css from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  
  // handleFeedback = ({ target }) => {
  //   const { feedback } = <target className="dataset"/>
  //     this.setState{(prevState)=>{{[feedback]: prevState[feedback]+1}}}
  // }
      
 render() {
        return (
<div className={css.App}>
<Section title='Please leave feedback '>
<FeedbackOptions options={FEEDBACK_OPTIONS} onLeaveFeedback/>
</Section>
</div>
  )}
}
export default App;
