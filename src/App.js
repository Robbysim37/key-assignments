import './App.css';

function App() {

  const drivers = [
    {name:"Robby", isStick:false, isCDL:false},
    {name:"Alex", isStick:true, isCDL:false},
    {name:"Anthony", isStick:false, isCDL:false},
    {name:"Kenny", isStick:true, isCDL:true},
    {name:"Ed", isStick:false, isCDL:true},
    {name:"Dane", isStick:true, isCDL:false},
    {name:"greg", isStick:true, isCDL:false},
    {name:"chuck", isStick:false, isCDL:false}
  ]

  const keys = [
    {vin:"pfa00055",rank:"standard"},
    {vin:"pfa00056",rank:"CDL"},
    {vin:"pfa00057",rank:"stick"},
    {vin:"pfa00058",rank:"standard"},
    {vin:"pfa00059",rank:"CDL"},
    {vin:"pfa00060",rank:"stick"},
    {vin:"pfa00061",rank:"CDL"},
    {vin:"pfa00062",rank:"stick"}
  ]

  const unassignedKeys = []

  const assignedKeys = []

  const sortKeys = () => {
    keys.sort((a,b) => {
      if(a.rank === "CDL"){
        return -1
      }else if(a.rank === "stick" && b.rank !== "CDL"){
        return -1
      }else if(a.rank === "standard"){
        return + 1
      }
    })
  }

  const assignKeys = () => {
    keys.forEach(key => {
      let currDriver
      let currDriverIndex
      if(key.rank = "CDL"){
        currDriver = drivers.find((driver,i) => {
          if(driver.isCDL){
            currDriverIndex = i
            return true
          }
        })
        if(currDriver){
          assignedKeys.push({
            vin:key.vin,
            rank:key.rank,
            driver:drivers.splice(currDriverIndex,1)[0]
          })
        }else{
          unassignedKeys.push(key)
        }
      }else if(key.rank = "stick"){
        unassignedKeys.push(key)
      }else if(key.rank = "standard"){
        unassignedKeys.push(key)
      }else{
        unassignedKeys.push(key)
      }
    })
  }

  sortKeys()
  assignKeys()
  console.log(assignedKeys)

  return (
    <div></div>
  );
}

export default App;
