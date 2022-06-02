import React, { useRef, createRef } from 'react'
import '../styles/main.css'
import '../styles/results.css'
import Results from './results.js'

export default class Game extends React.Component {
    constructor() {
        super()
        this.state = {
            score: 0,
            round: 1,
            maxScore: 0,
            maxRound: 5,
            colors: [],
            guesses: [],
            score: []
        }
    }

    componentDidMount() {
        this.colorDiv = createRef()
        this.Reset()

        // Set default value for guesses after component mounts
        if (isNaN(this.state.guessRed)) {
            this.setState({ guessRed: 0 })
        }
        if (isNaN(this.state.guessBlue)) {
            this.setState({ guessBlue: 0 })
        }

        if (isNaN(this.state.guessGreen)) {
            this.setState({ guessGreen: 0 })
        }
        this.setState({ showResults: false })

    }

    RandomNumber = (minX, maxX) => {
        return Math.floor((Math.random() * maxX - minX) + minX)
    }

    ColorChange() {
        this.colorRed = this.RandomNumber(0, 255)
        this.colorGreen = this.RandomNumber(0, 255)
        this.colorBlue = this.RandomNumber(0, 255)
    }

    NextRound = (totaldelta) => {
        console.log("Your score for this round is " + totaldelta + "! (Higher is worse. Minimum score: 0. Maximum score: 765)")

        let maxScore = 765

        this.setState({ score: this.state.score + (maxScore - totaldelta) })
        this.setState({ round: this.state.round + 1 })
        this.setState({ maxScore: (this.state.round) * 765 })
        //console.log("Your guess was: " + this.state.guessRed, + ", " + this.state.guessBlue, + ", " + this.state.guessGreen)
        console.log("Guess submitted!")
        this.ColorChange()

    }

    Reset = () => {
        this.ColorChange()
        this.setState({ score: 0 })
        this.setState({ round: 1 })
        this.setState({ maxScore: 0 })
        console.log("Game reset")
        this.setState({ showResults: true })
    }

    Check = () => {
        // console.log("Your guess was: ")
        // console.log(this.state.guessRed)
        // console.log(this.state.guessBlue)
        // console.log(this.state.guessGreen)

        // console.log("The color was: ")
        // console.log(this.colorRed)
        // console.log(this.colorBlue)
        // console.log(this.colorGreen)


        //console.log("deltas:")
        let redDelta = Math.abs(this.colorRed - this.state.guessRed)
        // console.log("color & guess red:")
        // console.log(this.colorRed)
        // console.log(this.state.guessRed)
        let greenDelta = Math.abs(this.colorGreen - this.state.guessGreen)
        //console.log("delta & guess green:")
        //console.log(this.colorGreen)
        //console.log(this.state.guessGreen)
        let blueDelta = Math.abs(this.colorBlue - this.state.guessBlue)
        //console.log("delta & guess blue:")
        //console.log(this.colorBlue)
        //console.log(this.state.guessBlue)
        let totaldelta = redDelta + greenDelta + blueDelta
        //console.log(totaldelta)



        if (this.state.round === 5) {
            this.Reset()
        }
        else {
            this.NextRound(totaldelta)
        }
    }

    closeResults = (e) => {
        this.setState({ showResults: false })
    }

    handleChange = (e) => { //Event handler for changing color values
        let val = e.target.value

        /*
        console.log(isNaN(e.target.value))
        if (isNaN(e.target.value)) {
            val = 0
            e.target.value = val
        }
        */

        if (isNaN(val)) { //If NaN or undefined
            switch (e.target.id) { //Set to previous value
                case 'red':
                    val = this.state.guessRed
                    if (isNaN(this.state.guessRed)) {
                        val = 0
                        e.target.value = 0
                    }
                    else {
                        val = this.state.guessRed
                        e.target.value = this.state.guessRed
                    }
                    break;
                case 'blue':
                    if (isNaN(this.state.guessBlue)) {
                        val = 0
                        e.target.value = 0
                    }
                    else {
                        val = this.state.guessBlue
                        e.target.value = this.state.guessBlue
                    }
                    break;
                case 'green':
                    if (isNaN(this.state.guessBlue)) {
                        val = 0
                        e.target.value = 0
                    }
                    else {
                        val = val = this.state.guessGreen
                        e.target.value = this.state.guessGreen
                    }
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
    }



    render() {
        const score = this.state.score;
        const round = this.state.round;
        const maxScore = this.state.maxScore;
        const maxRound = this.state.maxRound;
        var stats = this.state.stats
        var showResults = this.state.showResults;
        return (
            <div>
                <main>
                    <div className="game">
                        <h1>What is the RGB value of this color?</h1>
                        <div className="color-container" ref={this.colorDiv} style={{ backgroundColor: 'rgb(' + this.colorRed + ',' + this.colorGreen + ',' + + this.colorBlue + ')' }}>
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
                        <div className="game-state-container">
                            <p className="game-state-item" id='score'>Score: {score} / {maxScore}</p>
                            <p className="game-state-item" id='round'>Round: {round} of {maxRound}</p>
                        </div>
                    </div >
                    {showResults &&
                        <div className="results">
                            <h1 className="results-text">Your guesses:</h1>
                            { }
                            <button onClick={this.closeResults}>Close</button>
                        </div>
                    }
                </main >
            </div>
        )
    }
}
