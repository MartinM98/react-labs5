import React from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'
class GameAdmin extends React.Component
{    

render()
{
    return (
    <div>
        <PlayerOne/>
        <PlayerTwo/>
        <label>Set name of player one:</label>
        <input></input>
        <br/>
        <label>Set name of player two:</label>
        <input></input>
    </div>)

}
}

export default GameAdmin