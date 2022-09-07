import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [mytext, setMytext] = React.useState("")

  const handleMyTextChange = (e) => {
    console.log("handleMyTextChange")
    setMytext(e.target.value)
  }

  const letItGo = (e) => {
    const mytextarea = document.getElementById("mytextarea")
    mytextarea.className += " mytext-fade-out"

  }
  const resetMyText = (e) => {
    console.log("resetMyText")
    const mytextarea = document.getElementById("mytextarea")
    mytextarea.className = mytextarea.className.replace(" mytext-fade-out", "")
    mytextarea.value = ""
    setMytext("")
    console.log(mytext)
  }
    

  return (
    <div className="App">
      <h1>Let It Go...</h1>
      <textarea id="mytextarea" onChange={handleMyTextChange} onAnimationEnd={resetMyText} defaultValue={mytext}></textarea>
      <div class="controls">
        <button class="let-it-go" onClick={letItGo}>Let it go...</button>
      </div>
      
    </div>
  );
}

export default App;
