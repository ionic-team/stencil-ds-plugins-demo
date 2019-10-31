import React, { Component } from 'react';
import { DemoComponent } from 'component-library-react';
import './App.css';

interface State {
  value: number | null;
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      value: null
    };
  }

  updateRangeValue = (newValue: number) => {
    this.setState(() => ({
      value: newValue
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DemoComponent
            min={0}
            max={1000}
            advanced={{ one: 1, two: 'two', three: [1, 2] }}
            onSlideChanged={e => this.updateRangeValue(e.detail.value)}
          ></DemoComponent>

          {this.state.value ? <p>Value is {this.state.value}</p> : null}
        </header>
      </div>
    );
  }
}

export default App;
