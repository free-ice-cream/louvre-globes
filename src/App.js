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
  constructor() {
    super()
  }
  componentWillMount() {
    this.getData(0)
  }

buttonGlobe(e){

  e.preventDefault();

  let globe1 = "http://fic.li/globe?globe=1";


    let xhr = new XMLHttpRequest()

    xhr.addEventListener('load', () => {

      console.log(xhr.responseText)

    })

      xhr.open('GET', 'http://178.62.50.55:3000/?service=smashing&user=tired&globe=1')

    xhr.send()


}


  getData(n) {


    let xhr = new XMLHttpRequest()

    xhr.addEventListener('load', () => {

      console.log(xhr.responseText)

    })

      xhr.open('GET', 'http://178.62.50.55:3000/?service=smashing&user=tired&globe=1')

    xhr.send()
  }

  state = {
    result: 'No result'
  }



  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
      if(data === "fic.li/globe?globe=1"){
        this.getData(1);
      }
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
        <p>click the button to load the url shown</p>
        <button onClick={this.buttonGlobe} data-globe={this.state.result}>{this.state.result}</button>

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
