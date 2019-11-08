import React from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'
class GameAdmin extends React.Component
{    

    constructor(props)
{
super(props);
this.state={
    playerOneName:"name from input field",
    playerTwoName:"name from input field",
    firstActive:false
}
this.playerOneNameHandler=this.playerOneNameHandler.bind(this);
this.playerTwoNameHandler=this.playerTwoNameHandler.bind(this);
this.buttonsHandler=this.buttonsHandler.bind(this);
this.buttonsHandler2=this.buttonsHandler2.bind(this);

}

playerOneNameHandler(ev)
{
        this.setState({playerOneName:ev.target.value});
}

playerTwoNameHandler(ev)
{
        this.setState({playerTwoName:ev.target.value});
}

buttonsHandler() {
    this.setState((prevState, props) => ({
        firstActive:true
    }));

}
buttonsHandler2() {

    this.setState((prevState, props) => ({
        firstActive:false
    }));

}
render()
{
    return (
    <div>
        <PlayerOne dataFromParent={this.state.playerOneName} buttonsHandler={this.buttonsHandler} player={this.state.firstActive} />
        <PlayerTwo dataFromParent={this.state.playerTwoName} buttonsHandler2={this.buttonsHandler2} player={!this.state.firstActive}/>
        <label>Set name of player one:</label>
        <input onChange={this.playerOneNameHandler}></input>
        <br/>
        <label>Set name of player two:</label>
        <input onChange={this.playerTwoNameHandler}></input>

    </div>)

}
}

export default GameAdmin