import React from 'react'
import '../styles/main.css'

export default class Game extends React.Component {
    constructor() {
        super()
        var RandomNumber = function (minX, maxX) {
            return Math.floor((Math.random() * maxX - minX) + minX)
        }
        this.colorRed = RandomNumber(0, 255)
        this.colorGreen = RandomNumber(0, 255)
        this.colorBlue = RandomNumber(0, 255)
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
                        <input className='color-guess red' placeholder='Red'></input>
                        <input className='color-guess green' placeholder='Green'></input>
                        <input className='color-guess blue' placeholder='Blue'></input>
                    </div>
                    <button className='submit-button'>Submit</button>
                </header >
            </main >
        )
    }
}
