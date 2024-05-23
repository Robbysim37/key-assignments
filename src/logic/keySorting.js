
// yes this should probably be a class but I was paid for "Quick and dirty."

const CDLKeys = []
const chauffeurKeys = []
const manualKeys = []
const standardKeys = []

export const sortKeys = (keys) => {
    keys.forEach(key => {
      switch (key.rank){
        case "Chauffeur":
          chauffeurKeys.push(key)
        break;
        case "CDL":
          CDLKeys.push(key)
        break;
        case "Manual":
          manualKeys.push(key)
        break;
        default:
          standardKeys.push(key)
      }
    })
  }

  const assignRank = (drivers,key) => {
    let validDriver = drivers.find(driver => driver[key.rank] && driver.available)
        if(validDriver){
            validDriver.available = false
            return {...key,name:validDriver.name,id:validDriver.id}
        }else{
            return {...key,name:"No Driver"}
        }
  }

export const assignKeys = (drivers) => {
    const allKeys = [
      CDLKeys,
      chauffeurKeys,
      manualKeys,
      standardKeys
    ]
    const assignedKeys = []
    const unassignedKeys = []

    for(let i = 0; i < allKeys.length; i++){
      allKeys[i].forEach(key => {
        let keyDriverPair = assignRank(drivers,key)
        keyDriverPair.name !== "No Driver" ? 
        assignedKeys.push(keyDriverPair) 
        : 
        unassignedKeys.push(keyDriverPair)
      })
    }
    assignedKeys.sort((a,b) => a.group - b.group)
    unassignedKeys.sort((a,b) => a.group - b.group)
    return {
        assignedKeys,
        unassignedKeys
    }
  }