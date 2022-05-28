import logo from './logo.svg';
import './App.css';
import './styles/main.css'

function App() {
  return (
    <main>
      <header className="header">
        <h1>What is the RGB value of this color?</h1>
        <div className="color-container">
          <div style={{ backgroundColor: 'red' }}>

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
  );
}

export default App;
