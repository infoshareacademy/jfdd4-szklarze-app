import React from 'react'

export default class ProductCounter extends React.Component {
    constructor() {
        super()
        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
        this.state = {
            counter: 0
        }
    }

    incrementCounter() {
        return this.setState({counter: this.state.counter + 1})
    }

    decrementCounter() {
        return this.setState({counter: this.state.counter - 1})
    }

    render() {
        return (
            <div>
                <button onClick={this.state.counter !== 0 ?
                    this.decrementCounter : null
                }>
                    -
                </button>
                <span>  {this.state.counter}  </span>
                <button onClick={this.incrementCounter}>
                    +
                </button>
            </div>
        )
    }
}

