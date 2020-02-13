import React, { useState } from "react";
import "./App.css";
import StarWarsCharacters from "./components/StarWarsCharacters";
import StarWarsOptions from "./components/StarWarsOptions";
function App() {

  const [option, setOption] = useState("people")
  console.log(option)

  return (
    
    <div className="App">
      <header className="App-header">
        <img
          src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png"
          width="300"
          alt="logo"
        />
      </header>
      <StarWarsOptions setOption={setOption}/>
      <StarWarsCharacters option={option}/>
    </div>
  );
}

export default App;
