import React from 'react'
import '../styles/main.css'

export default class Game extends React.Component {
    constructor() {
        super()
        this.state = { guessRed: 0, guessGreen: 0, guessBlue: 0 }
        var RandomNumber = function (minX, maxX) {
            return Math.floor((Math.random() * maxX - minX) + minX)
        }
        this.colorRed = RandomNumber(0, 255)
        this.colorGreen = RandomNumber(0, 255)
        this.colorBlue = RandomNumber(0, 255)

        var setGuessRed = function (guess) {
            this.guessRed = guess
        }
        var setGuessBlue = function (guess) {
            this.guessBlue = guess
        }
        var setGuessGreen = function (guess) {
            this.guessGreen = guess
        }

    }

    Check = () => {
        console.log(this.state.guessRed)
        console.log(this.state.guessBlue)
        console.log(this.state.guessGreen)
        console.log("Guess submitted!")
    }

    handleChange = (e) => { //Event handler for changing color values
        let val = Number(e.target.value)

        if (isNaN(val)) { //If NaN
            switch (e.target.id) { //Set to previous value
                case 'red':
                    val = this.state.guessRed
                    e.target.value = val
                    break;
                case 'blue':
                    val = this.state.guessBlue
                    e.target.value = val
                    break;
                case 'green':
                    val = this.state.guessGreen
                    e.target.value = val
                    break;
                default:
                    console.log("Error! Please try refreshing the page.")
            }
        }
        else {
            if (val > 255) { //If value over 255 (max value) 
                switch (e.target.id) { //Set to previous value
                    case 'red':
                        val = this.state.guessRed
                        e.target.value = val
                        break;
                    case 'blue':
                        val = this.state.guessBlue
                        e.target.value = val
                        break;
                    case 'green':
                        val = this.state.guessGreen
                        e.target.value = val
                        break;
                    default:
                        console.log("Error! Please try refreshing the page.")
                }
            }
            if (val < 0) { //If value under 0 (min value)
                switch (e.target.id) { //Set to previous value
                    case 'red':
                        val = this.state.guessRed
                        e.target.value = val
                        break;
                    case 'blue':
                        val = this.state.guessBlue
                        e.target.value = val
                        break;
                    case 'green':
                        val = this.state.guessGreen
                        e.target.value = val
                        break;
                    default:
                        console.log("Error! Please try refreshing the page.")
                }
            }
            switch (e.target.id) { //Otherwise, set to current value
                case 'red':
                    this.setState({ guessRed: val })
                    break;
                case 'blue':
                    this.setState({ guessBlue: val })
                    break;
                case 'green':
                    this.setState({ guessGreen: val })
                    break;
                default:
                    console.log("Error! Please try refreshing the page.")
            }
        }

        /*
        console.log(val)
        if (val > 255) {
            e.target.value = 255
        }
        if (val > 255) {
            e.target.value = 255
        }
        if (val < 0) {
            e.target.value = 0
        }
        */

    }


    render() {
        return (
            <main>
                <header className="header">
                    <h1>What is the RGB value of this color?</h1>
                    <div className="color-container" style={{ backgroundColor: 'rgb(' + this.colorRed + ',' + this.colorBlue + ',' + + this.colorGreen + ')' }}>
                        <div>

                        </div>
                    </div>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    </a>
                    <div className='color-guess-container'>
                        <input id='red' onChange={this.handleChange} className='color-guess red' placeholder='0-255'></input>
                        <input id='green' onChange={this.handleChange} className='color-guess green' placeholder='0-255'></input>
                        <input id='blue' onChange={this.handleChange} className='color-guess blue' placeholder='0-255'></input>
                    </div>
                    <button onClick={this.Check} className='submit-button'>Submit</button>
                </header >
            </main >
        )
    }
}
