import * as React from 'react';
import {Button} from 'antd';
import './style/style.less';

class Index extends React.Component {
    public componentDidMount(): void {
    }

    public render() {
    return (
      <div className="App">
        <header className="App-header">
            <Button type="primary">Button</Button>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Index;
