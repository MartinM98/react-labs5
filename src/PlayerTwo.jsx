import React from 'react'

class PlayerTwo extends React.Component
{    

    constructor(props)
{
super(props);

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
        <label>1</label>
        <button disabled={this.props.player} onClick={this.props.buttonsHandler2}>{this.props.player?"The user is playing now":"Play"}</button>
    </div>)

}
}

export default PlayerTwo