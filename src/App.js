import './App.css';

function App() {
  return (
    <div className="App">
      <a href="https://middlebury.edu/" className="Nav" target="_blank" rel="noreferrer">
        <img className="Logo" src="/middlogo.png" alt=""/>
        <div className="Logo-text">
          Middlebury
        </div>
      </a>
      <div className="Masthead">
        <div className="Left-element">
          <div className="Main-title">
            Study Groups
          </div>
          <div className="Main-subtitle">
            Finally, place to ask all the <span className="Bold">"stupid"</span> questions
          </div>
          <div className="Buttons-wrapper">
            <a className="Button Create-button">
              Create a Group
            </a>
            <a className="Button Join-button">
              Join a Group
            </a>
          </div>
        </div>
        <div className="Right-element">
          <img className="Hero" src="/hero.jpg" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default App;
