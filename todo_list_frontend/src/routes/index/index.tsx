import * as React from 'react';
import {Button} from 'antd';
import md5 from 'md5'
import './style/style.less';

class Index extends React.Component {
  public componentDidMount(): void {
    console.log(md5('888888'));
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
