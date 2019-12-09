import React,{ Component }  from 'react'
import QrReader from 'react-qr-reader';
import './App.css';
import * as copy from'./copy.js';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-73698980-4');
ReactGA.pageview(window.location.pathname + window.location.search);

class Biggie extends Component {
  constructor() {
    super();
    this.state = {
      gateway:"https://node.snowglobes.ae/",
      code1:"http://www.snowglobes.ae/3",
      code2:"http://www.snowglobes.ae/2",
      code3:"http://www.snowglobes.ae/4",
      code4:"http://www.snowglobes.ae/5",
      user:"",
      service:"",
      device:"",
      languageSelection:"en",
      strapi:"https://strapi.snowglobes.ae",
      webappcontentendpoint:"/Webappcontents",
      currentPage:"newscan"
    }
  }
  // setLanguage = () => {
  //   if(this.state.languageSelection === "en"){
  //     this.setState({languageSelection:"ar"})
  //   }else if(this.state.languageSelection === "ar"){
  //     this.setState({languageSelection:"en"});
  //   };
  //   console.log("setLanguage sees ", this.state.languageSelection);
  //   this.setContent();
  //   return  this.state.languageSelection ;
  // }

  setAr= () => {

    this.setState({languageSelection:"ar"})

    this.setContent();
    return  this.state.languageSelection ;
  }
  setFr= () => {

    this.setState({languageSelection:"fr"})

    this.setContent();
    return  this.state.languageSelection ;
  }
  setEn= () => {

    this.setState({languageSelection:"en"})

    this.setContent();
    return  this.state.languageSelection ;
  }



  componentWillMount() {
    // this.mounted = true;
    // if(this.mounted) {
      this.setContent();
      // this.getData(0);
    }

  // }
  // componentDidUnmount() {
  //   this.mounted=false;
  //
  // }
  //


  setContent() {

    let xhr = new XMLHttpRequest()

    xhr.addEventListener('load', () => {
    let xhrcopy = JSON.parse(xhr.responseText);
      // console.log(xhr.responseText);


      Object.size = function(obj) {
        var size = 0, id;
        for (id in obj) {
            if (obj.hasOwnProperty(id)) size++;
            console.log("obj.pagetitle", obj[0].pagetitle);
        }

        return size;
    };

    // Get the size of an object
    var size = Object.size(xhrcopy);
    //
    for(let i=0; i< size; i++){
      if(xhrcopy[i].language === "en" && this.state.languageSelection === "en"){
        this.setState({
          pagetitle:xhrcopy[i].pagetitle,
          buttontext:xhrcopy[i].buttontext,
          congratulationheading:xhrcopy[i].congratulationheading,
          congratulation:xhrcopy[i].congratulation,
          generalheading:xhrcopy[i].generalheading,
          generalproject:xhrcopy[i].generalproject,
          scanningheading:xhrcopy[i].scanningheading,
          scanninginstructions:xhrcopy[i].scanninginstructions,
          languagebutton:xhrcopy[i].languagebutton,
          logolocation:xhrcopy[i].whitelogo.url


        })
      }
      if(xhrcopy[i].language === "fr"  && this.state.languageSelection === "fr"){
        this.setState({
          pagetitle:xhrcopy[i].pagetitle,
          buttontext:xhrcopy[i].buttontext,
          congratulationheading:xhrcopy[i].congratulationheading,
          congratulation:xhrcopy[i].congratulation,
          generalheading:xhrcopy[i].generalheading,
          generalproject:xhrcopy[i].generalproject,
          scanningheading:xhrcopy[i].scanningheading,
          scanninginstructions:xhrcopy[i].scanninginstructions,
          languagebutton:xhrcopy[i].languagebutton,
          logolocation:xhrcopy[i].whitelogo.url


        })
      }
      if(xhrcopy[i].language === "ar"  && this.state.languageSelection === "ar"){
        this.setState({
          pagetitle:xhrcopy[i].pagetitle,
          buttontext:xhrcopy[i].buttontext,
          congratulationheading:xhrcopy[i].congratulationheading,
          congratulation:xhrcopy[i].congratulation,
          generalheading:xhrcopy[i].generalheading,
          generalproject:xhrcopy[i].generalproject,
          scanningheading:xhrcopy[i].scanningheading,
          scanninginstructions:xhrcopy[i].scanninginstructions,
          languagebutton:xhrcopy[i].languagebutton,
          logolocation:xhrcopy[i].whitelogo.url



        })
      }

    }



    console.log("var size = ", size);
    console.log("xhrcopy= ", xhrcopy);
    // console.log("xhrcopy[1].pagetitle ", xhrcopy.0.pagetitle);

    })
    //console.log(this.state.gateway+"?service="+this.state.service+"&user="+this.state.user+"&globe="+this.state.device);
    xhr.open('GET', this.state.strapi+this.state.webappcontentendpoint)

    xhr.send()
  }

  getData(n) {

    let xhr = new XMLHttpRequest()

    xhr.addEventListener('load', () => {
      //console.log(xhr.responseText)
    })
    //console.log(this.state.gateway+"?service="+this.state.service+"&user="+this.state.user+"&globe="+this.state.device);
      xhr.open('GET', this.state.gateway+"?service="+this.state.service+"&user="+this.state.user+"&globe="+this.state.device)

    xhr.send()
  }
  callGateway(n) {

    let xhr = new XMLHttpRequest()

    xhr.addEventListener('load', () => {
      //console.log(xhr.responseText)
    })
    //console.log(this.state.gateway+"?service="+this.state.service+"&user="+this.state.user+"&globe="+this.state.device);
      xhr.open('GET', this.state.gateway+"?service="+"native scanner"+"&user="+this.state.user+"&globe="+n)

    xhr.send();
    // this.setPage("congrat")
  }
  setPage(p){
    this.setState({currentPage:p});
  }


  state = {
    result: 'No result'
  }



  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })

      // switch (data) {
      //
      //   case this.state.code1:
      //     this.setState({device:1,
      //       currentPage:"congrat"
      //     })
      //     this.getData();
      //     break;
      //   default:
      //
      // }
      if(data === this.state.code1){
        this.setState({device:1,
          currentPage:"congrat"
        })
        this.getData();

      }
      if(data === this.state.code2){
        this.setState({device:2,
          currentPage:"congrat"})
        this.getData();
      }
      if(data === this.state.code3){
        this.setState({device:3,
          currentPage:"congrat"})
        this.getData();
      }
      if(data === this.state.code4){
        this.setState({device:4,
          currentPage:"congrat"})
        this.getData();
      }
      if(data === this.state.code5){
        this.setState({device:5,
          currentPage:"congrat"})
        this.getData();
      }
      if(data === this.state.code6){
        this.setState({device:6,
          currentPage:"congrat"})
        this.getData();
      }
      if(data === this.state.code7){
        this.setState({device:7,
          currentPage:"congrat"})
        this.getData();
      }
      if(data === this.state.code8){
        this.setState({device:8,
          currentPage:"congrat"})
        this.getData();
      }

    }
  }
  handleError = err => {
    console.error(err)
  }



  render() {
    return (
      <div className="App">
        <header className="App-header Container">
          <div className="mainContainer">



<Switch>

<Route
            exact path='/'
            render={(props) => (


          <div className = "scannin-page">
              <div className="reader">
                <QrReader delay={300} onError={this.handleError} onScan={this.handleScan}/>
              </div>
              <div className="pageContainer">
                <Banner setFr ={this.setFr} setAr ={this.setAr} setEn ={this.setEn} {...this.state} />
                <Copy {...this.state} mode={this.state.currentPage}/>
                <Logo {...this.state}/>
              </div>
          </div>
  )}  />
  <Route
              exact path='/1'
              render={(props) => (

                <div className = "scannin-page" >
                  <div className="button-only">
                    <HomeButton  copy ={this.state.buttontext}/>
                  </div>
                    <div className="pageContainer">
                      { this.callGateway(1)}
                      <Banner  setFr ={this.setFr} setAr ={this.setAr} setEn ={this.setEn}{...this.state} />
                      <Copy {...this.state} mode={"congrat"}/>
                      <Logo {...this.state}/>
                    </div>
                </div>

  )}/>
  <Route
              exact path='/2'
              render={(props) => (
                <div className = "scannin-page" >
                <div className="button-only">
                  <HomeButton  copy ={this.state.buttontext}/>
                </div>
                    <div className="pageContainer">

                    { this.callGateway(2)}

                      <Banner setFr ={this.setFr} setAr ={this.setAr} setEn ={this.setEn}{...this.state} />

                      <Copy {...this.state} mode={"congrat"}/>
                      <Logo {...this.state}/>
                    </div>
                </div>

  )}/>
  <Route
              exact path='/3'
              render={(props) => (
                    <div className = "scannin-page" >
                    <div className="button-only">
                      <HomeButton  copy ={this.state.buttontext}/>
                    </div>
                        <div className="pageContainer">

                        { this.callGateway(3)}

                          <Banner setFr ={this.setFr} setAr ={this.setAr} setEn ={this.setEn}{...this.state} />

                          <Copy {...this.state} mode={"congrat"}/>
                          <Logo {...this.state}/>
                        </div>

                    </div>

  )}/>
  <Route
              exact path='/4'
              render={(props) => (
                <div className = "scannin-page" >
                <div className="button-only">
              <HomeButton  copy ={this.state.buttontext}/>
                </div>
                    <div className="pageContainer">

                    { this.callGateway(4)}

                      <Banner setFr ={this.setFr} setAr ={this.setAr} setEn ={this.setEn}{...this.state} />

                      <Copy {...this.state} mode={"congrat"}/>
                      <Logo {...this.state}/>
                    </div>

                </div>

  )}/>
  <Route
              exact path='/5'
              render={(props) => (
                <div className = "scannin-page" >
                    <div className="button-only">
                      <HomeButton  copy ={this.state.buttontext}/>
                    </div>
                    <div className="pageContainer">

                    {this.callGateway(5)}

                      <Banner setFr ={this.setFr} setAr ={this.setAr} setEn ={this.setEn}{...this.state} />

                      <Copy {...this.state} mode={"congrat"}/>
                      <Logo {...this.state}/>
                    </div>

                </div>

  )}/>



  </Switch>

      </div>
    </header>
  </div>
    )
  }

}

function HomeButton(c) {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <div className="frame-0">
    <div className="frame-1">
      <div className="frame-2">
        <button className ="bounce-back" type="button" onClick={handleClick}>
          {c.copy}
        </button>
      </div>
    </div>
    </div>
  );
}

class Logo extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
<img className= "logo-bottom" src={this.props.strapi+"/uploads/c5b1b528fc8d456a8dd2052b65820dbe.png"}/>
            )
          }
}

class Copy extends Component {
  constructor(props) {
    super(props);
  }


  render(){
    if(this.props.mode === "newscan"){
      console.log("newscan");
      return (
        <div className="landing1">
          <div className =  "page-heading">{this.props.scanningheading}</div>
          <div className = "page-body">{this.props.scanninginstructions}</div>
        </div>
      )
    }else if(this.props.mode === "congrat"){
      return (
        <div className="landing1">
          <div className =  "page-heading">{this.props.congratulationheading}</div>
          <div className = "page-body">{this.props.congratulation}</div>
        </div>
      )
    }else if(this.props.mode === "general"){
      return (
        <div className="landing1">
          <div className =  "page-heading">{this.props.generalheading}</div>
          <div className = "page-body">{this.props.generalproject}</div>
        </div>
      )
    }


  }

}
class Banner extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className="bar">
        <div className = "language-selection">

            <div className = "language-button">
              <LangSlect clik={this.props.setAr} lan={"ar"}/>
            </div>
            <div className = "language-button">
              <LangSlect clik={this.props.setEn} lan={"en"}/>
            </div>
            <div className = "language-button">
              <LangSlect clik={this.props.setFr} lan={"fr"}/>
            </div>

        </div>
      </div>
    )
  }
}
class LangSlect extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className="bar">
        <div className = "language-selection">
          <button className= "btn btn-default  .btn-sm lang-but" onClick={this.props.clik}> {this.props.lan}</button>
        </div>
      </div>
    )
  }
}
export default Biggie;
