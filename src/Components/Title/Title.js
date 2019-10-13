import React, {Component} from 'react';
import "./Title.css"
class Title extends Component{

    constructor(props){
        super(props)
        this.state ={
            Title: "This is dummy title",
            isInput:false
        }
    }
    inputHander(){
        this.setState({
            ...this.state,
            isInput:true
        })
    }
    onChangeValue(event){
        // console.log(event.target.value)
        this.setState({
            ...this.state,
            Title:event.target.value
        })
    }
    keypressValue(event){
        // console.log(event.key)

        if(event.key==='Enter'){
            this.setState({
                ...this.state,
                isInput:false
            })
        }
        
    }
    render(){
        let output = null
        if(this.state.isInput){
            output=<div>
                        <input className="form-control" type="text" value={this.state.Title} onChange={(event)=>this.onChangeValue(event)}
                        onKeyPress={(event)=>this.keypressValue(event)} />
                    </div>
        } else{
            output=(
                <div className="d-flex Title">
                    <h1 className="display-4">{this.state.Title}</h1>
                    <span className="ml-auto edit-icon" onClick={()=>this.inputHander()} ><i className="fas fa-pencil-alt"></i></span>
                </div>
            )
        }
        return(
            <div>
                {output}
            </div>
        )
    }
}

export default Title;