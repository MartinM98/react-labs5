import React from 'react'

class PlayerOne extends React.Component
{    

constructor(props)
{
super(props);
this.state=({counter:0})
this.clickFunction=this.clickFunction.bind(this);
}

clickFunction()
{
    this.setState({counter:this.state.counter+1})
    this.props.buttonsHandler()
    
}


render()
{
   return(
    <div>
        <p1>Player One</p1>
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

export default PlayerOne