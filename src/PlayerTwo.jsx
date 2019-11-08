import React from 'react'

class PlayerTwo extends React.Component
{    

    constructor(props)
{
    super(props);
 this.state={
counter:1
 }
this.clickFunction=this.clickFunction.bind(this);
}

clickFunction()
{
    this.setState({counter:this.state.counter+1})
    this.props.buttonsHandler2();
    
}


render()
{
    return(
    <div>
       <p1>Player Two</p1>
        <br/>
        <label>Name: </label>
        <label>{this.props.dataFromParent}</label>
        <br/>
        <label>Played number of times: </label>
        <label>{this.state.counter}</label>
        <button disabled={this.props.player} onClick={this.clickFunction}>{this.props.player?"The user is playing now":"Play"}</button>
    </div>)

}
}

export default PlayerTwo