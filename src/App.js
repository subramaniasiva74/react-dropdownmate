import { useState } from 'react';
import './App.css';
import { Dropdown } from './Dropdown';

function App() {
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "Country") {
      setCountry(e.target.value);
    } else if (e.target.name === "Language") {
      setLanguage(e.target.value);
    }
  }

  return (
    <div className="App">
      <div>
        <Dropdown options={["India", "USA", "Japan", "China"]} onChange={handleChange} labelText="Country"/>
      </div>
      <div>
        <Dropdown options={["English", "Tamil", "French", "Chinese"]} onChange={handleChange} labelText="Language"/>
      </div>
      <div>
        <label htmlFor="">Selected Country: {country}</label>
      </div>
      <div>
        <label htmlFor="">Selected Language: {language}</label>
      </div>
    </div>
  );
}

export default App;
