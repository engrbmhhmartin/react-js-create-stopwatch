//import React from 'react';
// import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Title from './Title/Title';
import CountDown from './countDown/countdown';
import Controller from './Controller/Controller';
import Laps from './Laps/Laps'


// function App() {
  class App extends Component{

    constructor(props){
        super(props)
        this.state ={
            time:{
              min:0,
              sec:0,
              mili:0
            },
            laps: []
        }
    }
    getStart=()=>{
      this.intervelID = setInterval(()=>{
        let min = this.state.time.min
        let sec = this.state.time.sec
        let mili = this.state.time.mili
        if(mili>=10){
          sec = sec+1
          mili = 0
        }
        if(sec >=60){
          min = min+1
          sec =0
        }
        this.setState({
          ...this.state,
          time: {
            min,
            sec,
            mili: mili+1
          }
        })
      }, 100)
    }
    getPush=()=>{
        clearInterval(this.intervelID)
    }
    getLap=()=>{
      let time ={
        ...this.state.time
    }
    this.setState({
        ...this.state,
        laps:[time, ...this.state.laps]
    })
    console.log(this.state.laps)
    }
    getReset=()=>{
      this.setState({
        time:{
          min:0,
          sec:0,
          mili:0
        },
        laps:[]
      })
    }
  render(){
  return (
    <div className="App">
      <div className="container py-5">
          <div className="row">
              <div className="col-sm-8 offset-sm-2">
                  <Title />
                  <CountDown time={this.state.time}/>
                  <Controller 
                  start={()=>this.getStart()} 
                  stop={()=>this.getPush()} 
                  reset={()=>this.getReset()}
                  lap={()=>this.getLap()}/>
                  <Laps className="my-5" laps={this.state.laps}/>
              </div>
          </div>
      </div>
    </div>
  )
}
  }

export default App;
