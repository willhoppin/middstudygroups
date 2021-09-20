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
            <a href="https://middlebury.edu/" className="Button Create-button">
              Create a Group
            </a>
            <a href="https://middlebury.edu/" className="Button Join-button">
              Join a Group
            </a>
          </div>
        </div>
        <div className="Right-element">
          <img className="Hero" src="/hero.jpg" alt=""/>
        </div>
      </div>
      <div className="Tiny-text">
        Use this site to create or join a Middlebury Study Group - a directory of online Discord chats from ECON0150A to GRMN0475B. Ask questions, schedule study sessions, or work on group projects with fellow students in your classes. No more struggling with homework in isolation!
      </div>
      <a href="https://willhoppin.com" target="_blank" rel="noreferrer" className="Footer">
        ©2021 by <span className="Underline">Will Hoppin</span>
      </a>
    </div>
  );
}

export default App;
