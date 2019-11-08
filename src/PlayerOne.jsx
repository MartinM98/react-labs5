import React from 'react'

class PlayerOne extends React.Component
{    

constructor(props)
{
super(props);

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
        <label>0</label>
        <button disabled={this.props.player} onClick={this.props.buttonsHandler}>{this.props.player?"The user is playing now":"Play"}</button>
    </div>)

}
}

export default PlayerOne