import './App.css';

function unsupported() {
  alert('Sorry, you can\'t create groups because Will hasn\'t programmed it yet! Contact Will at whoppin@middlebury.edu to manually get your study group listed!')
}

function App() {
  var groups = [
    {
      "name" : "Economics",
      "data" : {
        "department" : "ECON",
        "number" : "0150",
        "section" : "D",
        "name" : "Intro to Macroeconomics",
        "professor" : "Gavin-Coulombe",
        "link" : "https://groupme.com/join_group/71168002/AJDO9lBW",
      }
    },
    {
      "name" : "Economics"
    },
    {
      "name" : "Economics"
    },
    {
      "name" : "Economics"
    }
  ]
  var lines = [];
  for (var i = 0; i < groups.length; i++) {
    lines.push(<div>Test</div>);
  }
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
            Finally, a place to ask all of your <span className="Bold">"stupid"</span> questions
          </div>
          <div className="Buttons-wrapper">
            <div onClick={unsupported} className="Button Create-button">
              Create a Group
            </div>
            <div className="Button Join-button" onClick={() => window.location.replace("/#browse")}>
              Join a Group
            </div>
          </div>
        </div>
        <div className="Right-element">
          <img className="Hero" src="/hero.jpg" alt=""/>
        </div>
      </div>
      <div className="Tiny-text">
        Use this site to create or join a Middlebury Study Group - a directory of online GroupMe chats from ECON0150A to GRMN0475B. Ask questions, schedule study sessions, or work on group projects with fellow students in your classes. No more struggling with homework in isolation!
      </div>
      <div className="Browse">
        Browse Study Groups
      </div>
      <div className="Browse-subtitle" id="browse">
        All study groups are for the current semester: <span className="Bold">Fall 2021</span>
      </div>
      <div className="Group-entry">
        <div className="Left-half-entry">
          <div className="Department">ANTH</div>
          <div>&nbsp;</div>
          <div>223</div>
          <div>A</div>
          <div>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</div>
          <div className="Italics">Intro to Anthropological Fauna</div>
          <div>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;Prof.&nbsp;</div>
          <div>E. Glickman</div>
        </div>
        <div className="Right-half-entry">
          <a className="Group-button" href="https://groupme.com/join_group/71168002/AJDO9lBW" target="_blank" rel="noreferrer">
            <img className="Group-logo" src="/groupmelogo.png" alt=""/>
            Join Group
          </a>
        </div>
      </div>
      <div>{lines}</div>
      <a href="https://willhoppin.com" target="_blank" rel="noreferrer" className="Footer">
        ©2021 by <span className="Underline">Will Hoppin</span>
      </a>
    </div>
  );
}

export default App;
