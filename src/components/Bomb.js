// Bomb Component Code Goes Here
import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
    super()

    this.state = {
      secondsLeft: props.initialCount
    }

    this.timer = this.timer.bind(this)
  }
  timer() {
    const answer = this.state.secondsLeft > 0 
    return answer ? this.state.secondsLeft + " seconds left before I go boom!" : "Boom!"
  }

  render() {
    return (
      <p>{this.timer()}</p>
    )
  }
}

export default Bomb
