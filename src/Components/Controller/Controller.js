import React, { Component } from 'react'

class Controller extends Component {
    constructor(props) {
        super(props)
        this.state = {
            start: true,
            stop: false,
            lap: false,
            reset: false,
        }
    }
    
    startHandeler=()=>{
        this.setState({
        ...this.state,
        start:false,
        stop:true,
        lap:true
    })
    this.props.start()
}
    pushHandeler=()=>{
        this.setState({
            ...this.state,
            start:true,
            stop:false,
            lap:false,
            reset:true
        })
        this.props.stop()
    }
        
    lapHandeler=()=>{
       this.props.lap()
    }
    resetHandeler=()=>{
        this.setState({
            ...this.state,
            start: true,
            stop: false,
            lap: false,
            reset: false

        })
        this.props.reset()
    }

    geController=()=> {
        let output = null;
        if (this.state.start && !this.state.reset) {
            output = (
                <div className="my-5">
                    <button
                        className="btn btn-success btn-lg px-5"
                    onClick={(event)=>this.startHandeler()}>Start
                </button>
                </div>
            )
        }
        else if(this.state.stop && this.state.lap){
            output = (
                <div className="my-5">
                    <button
                        className="btn btn-primary btn-lg px-5"
                    onClick={(event)=>this.pushHandeler()}>Pause
                </button>
                <button
                    className="btn btn-warning btn-lg px-5 ml-5"
                onClick={(event)=>this.lapHandeler()}>Lap
            </button>
            </div>
            )
        } else if(this.state.start && this.state.reset){
            output = (
                <div className="my-5">
                    <button
                        className="btn btn-success btn-lg px-5"
                    onClick={(event)=>this.startHandeler()}>Start
                </button>
                <button
                    className="btn btn-danger btn-lg px-5 ml-5"
                onClick={(event)=>this.resetHandeler()}>Reset
            </button>
            </div>
            )
        }
        return output;
    }
    render() {
        return this.geController();

    }

}
export default Controller;
