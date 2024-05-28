import './App.css';
import { useState } from 'react';
import { keyData,driverData } from './logic/csvParser';
import { sortKeys, assignKeys } from './logic/keySorting';
import { createAssignments } from './logic/createCSVfile';


function App() {

  const [keys,setKeys] = useState()
  const [drivers,setDrivers] = useState()

  const testDrivers = [

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

  const parseKeyList = (event) => {
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

  const parseDriverList = (event) => {
    // M for manual - CA or A for CDL - CH for chauffuer
    // add group number to parsing
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const contents = e.target.result;
        const lines = contents.split('\n');
        const data = lines.map(line => line.split(','));
        setDrivers(driverData(data))
      };
      reader.readAsText(file);
    }
  }

  const keysClickHandler = (e) => {
    sortKeys(keys)
    const {assignedKeys,unassignedKeys} = assignKeys(drivers)
    createAssignments(assignedKeys,unassignedKeys)
  }

  return (
    <div className='app'>
      <div className='container'>
      <div className='fileUpload'>
        <p>Upload Driver Signout Sheet</p>
        <input type='file' accept='.csv' onChange={parseKeyList}></input>
      </div>
      <div className='fileUpload'>
      <p>Upload Name List</p>
      <input type='file' accept='.csv' onChange={parseDriverList}></input>
      </div>
      <button onClick={keysClickHandler}>Assign Keys</button>
      </div>
    </div>
  );
}

export default App;
