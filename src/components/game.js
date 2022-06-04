import React, { useRef, createRef } from 'react'
import '../styles/main.css'
import '../styles/results.css' //TODO: move modal to results.js
import Results from './results.js' //TODO: move modal to results.js

export default class Game extends React.Component {
    constructor() {
        super()
        this.state = {
            maxRoundScore: 765,
            score: 0,
            round: 1,
            maxRound: 5,
            colors: [],
            guesses: [],
            deltas: [],
        }
    }

    componentDidMount() {
        this.Initialize()

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
        this.setState({ showResults: false }) //Set default visibility of results screen to false

    }

    RandomNumber = (minX, maxX) => {
        return Math.floor((Math.random() * maxX - minX) + minX)
    }

    ColorChange() { //Randomized the color of the square that refers to the class' color values
        this.colorRed = this.RandomNumber(0, 255)
        this.colorGreen = this.RandomNumber(0, 255)
        this.colorBlue = this.RandomNumber(0, 255)
    }

    SetScore(delta) { //Updates the score, round, and maximum score when a guess is submitted
        let localScore = (765 - delta)
        console.log("Local score: " + localScore)
        console.log("Current delta: " + delta)

        this.setState({
            score: this.state.score + localScore,
            round: this.state.round + 1,
            maxScore: (this.state.round) * 765
        })
        console.log("Score added to total. Round changed.")
    }

    NextRound = () => { //
        this.ColorChange()
    }

    Finalize = () => {
        console.log(this.state.score)
        let maxScore = 765
        this.setState({
            maxScore: (this.state.round) * 765,
            roundMaxScore: maxScore * this.state.round,
        }, () => {
            console.log(this.state.score)
            this.setState({ showResults: true })
        })
    }

    Initialize = () => { //Sets self(div) to a random color and resets the game state
        this.ColorChange()
        this.Reset()
    }

    Reset = () => {
        this.setState({
            score: 0,
            round: 1,
            maxScore: 0,
            guesses: [],
            colors: [],
            deltas: [],
            guesses: []
        })
        console.log("Game reset")
    }

    Check = () => {
        //Checks current guess against the current color. 
        //Adds the color, guess & difference to the state. 
        //Afterwards, moves on to the next round or finalizes the game.

        let redDelta = Math.abs(this.colorRed - this.state.guessRed)
        let greenDelta = Math.abs(this.colorGreen - this.state.guessGreen)
        let blueDelta = Math.abs(this.colorBlue - this.state.guessBlue)
        let totaldelta = redDelta + greenDelta + blueDelta

        // Debug for guesses
        // console.log("color & guess red:")
        // console.log(this.colorRed)
        // console.log(this.state.guessRed)
        // console.log("Your total difference for this round is " + totaldelta + "! (Higher is worse. Minimum score: 0. Maximum score: 765)")


        //Push 
        this.state.colors.push([this.colorRed, this.colorGreen, this.colorBlue])
        this.state.guesses.push([this.state.guessRed, this.state.guessGreen, this.state.guessBlue])
        this.state.deltas.push(totaldelta)
        this.SetScore(totaldelta)

        if (this.state.round === 5) {
            this.Finalize()
        }
        else {
            this.NextRound()
        }


    }

    closeResults = (e) => { //Closes the results screen modal, then resets the game
        this.setState({
            showResults: false,
        }, () => {
            this.Reset()
        })
    }

    handleChange = (e) => { //Event handler for changing color values
        let val = e.target.value

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

                    {showResults && //TODO: move modal to results.js
                        <div className="results">
                            <h1 className="results-text-header">Your guesses:</h1>
                            {
                                this.state.colors.map((x, i) =>
                                    <div className="results-container" key={"result-" + i}>
                                        <div className="guess-container">
                                            <div className="results-color" style={{ backgroundColor: 'rgb(' + this.state.colors[i][0] + ', ' + this.state.colors[i][1] + ', ' + this.state.colors[i][2] + ')' }}></div>
                                            <div className="results-guess">Your guess was {this.state.guesses[i][0] + ', ' + this.state.guesses[i][1] + ', ' + this.state.guesses[i][2]}. Score: {this.state.maxRoundScore - this.state.deltas[i]} / {this.state.maxRoundScore} </div>
                                        </div>
                                        <div className="results-text results-color-text">Actual: {this.state.colors[i][0] + ', ' + this.state.colors[i][1] + ', ' + this.state.colors[i][2]}</div>
                                    </div>
                                )
                            }
                            <div className="score-text">Total score: {this.state.score}/{this.state.roundMaxScore}</div>
                            <button className="close-button" onClick={this.closeResults}>Close</button>
                        </div>
                    }
                </main >
            </div >
        )
    }
}
