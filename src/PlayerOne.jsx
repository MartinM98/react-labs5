import React from 'react'

class PlayerOne extends React.Component
{    
//pass states using handler and props
render()
{
   return(
    <div>
        <p1>Player One</p1>
        <br/>
        <label>Name: </label>
        <label>name from input field</label>
        <br/>
        <label>Played number of times: </label>
        <label>0</label>
        <button>Play</button>
    </div>)

}
}

export default PlayerOne