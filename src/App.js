import React,{ Component }  from 'react'

import QrReader from 'react-qr-reader';


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header Container">
        <Test/>

      </header>
    </div>
  );
}
class Test extends Component {
  state = {
    result: 'No result'
  }

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <div className="header-copy">Below is the output from the scanner</div>
        <a href = "{this.state.result}"> click to load page: {this.state.result}</p>
        <Copy/>
      </div>
    )
  }
}
class Copy extends Component {
  state ={

  }
  render(){
    return (
      <div className="box-copy"> Here we can put some copy about the globes etc
      </div>

    )
  }

}



export default App;
