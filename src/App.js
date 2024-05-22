import './App.css';
import { useState } from 'react';
import { keyData } from './logic/csvParser';
import { sortKeys, assignKeys } from './logic/keySorting';


function App() {

  const [keys,setKeys] = useState()

  const drivers = [

    {name:"Robby",
    CDL:false,
    Chauffeur:false,
    Manual:false,
    Standard:true,
    available:true},

    {name:"Alex",
    CDL:false,
    Chauffeur:false,
    Manual:true,
    Standard:true,
    available:true},

    {name:"Anthony",
    CDL:false,
    Chauffeur:false,
    Manual:true,
    Standard:true,
    available:true},

    {name:"Kenny",
    CDL:true,
    Chauffeur:false,
    Manual:true,
    Standard:true,
    available:true},

    {name:"Ed",
    CDL:true,
    Chauffeur:false,
    Manual:true,
    Standard:true,
    available:true},

    {name:"Jacob",
    CDL:false,
    Chauffeur:false,
    Manual:false,
    Standard:true,
    available:true},

    {name:"greg",
    CDL:true,
    Chauffeur:false,
    Manual:true,
    Standard:true,
    available:true},

    {name:"Chuck",
    CDL:true,
    Chauffeur:false,
    Manual:true,
    Standard:true,
    available:true}
  ]

  const parseFile = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const contents = e.target.result;
        const lines = contents.split('\n');
        const data = lines.map(line => line.split(','));
        setKeys(keyData(data))
      };
      reader.readAsText(file);
  }}

  const keysClickHandler = (e) => {
    sortKeys(keys)
    const {assignedKeys,unassignedKeys} = assignKeys(drivers)
    console.log(assignedKeys)
    console.log(unassignedKeys)
  }

  return (
    <div>
      <input type='file' accept='.csv' onChange={parseFile}></input>
      <button onClick={keysClickHandler}>Assign Keys</button>
    </div>
  );
}

export default App;
