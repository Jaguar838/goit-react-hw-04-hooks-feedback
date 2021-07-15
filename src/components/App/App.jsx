import { FeedbackOptions } from 'components/FeedbackOptions';
import { Section } from 'components/Section';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';
import './App.css';
import {} from 'server/constants';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  handleFeedback = ({ target }) => {
    const { feedback } = <target className="dataset">
      this.setState{(prevState)=>{{[feedback]: prevState[feedback]+1}}}
  }
      
      render() {
      
        return (
        <div>
        <Section title='Please leave feedback '>
          <FeedbackOptions options={FEEDBACK_OPTIONS} onLeaveFeedback/>
        </Section>
        </div>)
      }
        }

div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
