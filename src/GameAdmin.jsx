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
    playerTwoName:"name from input field"
}
this.playerOneNameHandler=this.playerOneNameHandler.bind(this);
this.playerTwoNameHandler=this.playerTwoNameHandler.bind(this);
}

playerOneNameHandler(ev)
{
        this.setState({playerOneName:ev.target.value});
}

playerTwoNameHandler(ev)
{
        this.setState({playerTwoName:ev.target.value});
}

render()
{
    return (
    <div>
        <PlayerOne dataFromParent={this.state.playerOneName} />
        <PlayerTwo dataFromParent={this.state.playerTwoName}/>
        <label>Set name of player one:</label>
        <input onChange={this.playerOneNameHandler}></input>
        <br/>
        <label>Set name of player two:</label>
        <input onChange={this.playerTwoNameHandler}></input>

    </div>)

}
}

export default GameAdmin