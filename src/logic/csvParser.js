export const keyData = (matrix) => {
    let keys = []
    let groupNumber
    matrix.forEach(arr => {
        const keyBuilder = {}
        let potentialVIN = arr[3]
        if(arr[0].length <= 2 && arr[0].length !== 0){
            groupNumber = arr[0]
        }
        if(potentialVIN && potentialVIN.length === 8){
            keyBuilder.vin = potentialVIN
            keyBuilder.group = groupNumber
            let potentialRank = arr[8]
            switch(potentialRank){
                case "CDL":
                    keyBuilder.rank = "CDL"
                break;
                case "Chauffeur":
                    keyBuilder.rank = "Chauffeur"
                break;
                case "Manual":
                    keyBuilder.rank = "Manual"
                break;
                default:
                    keyBuilder.rank = "Standard"
            }
            keys.push(keyBuilder)
        }
    });
    return keys
}

const shuffleDrivers = (drivers) => {
    for (let i = drivers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = drivers[i];
        drivers[i] = drivers[j];
        drivers[j] = temp;
    }
}

const shapeDriverData = (driver) => {
    driver.name = driver.name.replaceAll('"',"").trim()
    driver.id = driver.id.replace("\r","")
}

export const driverData = (matrix) => {
    const drivers = []
    for(let i = 1; i < matrix.length; i++){
        const currDriverArray = matrix[i]
        const driver = {
            name:`${currDriverArray[1]} ${currDriverArray[0]}`,
            id:currDriverArray[currDriverArray.length - 1],
            CDL:false,
            Chauffeur:false,
            Manual:false,
            Standard:true,
            available:true
        }

        shapeDriverData(driver)

        let certString = ""
        for(let j = 2;j < currDriverArray.length - 1; j++){
            certString = certString + currDriverArray[j]
        }

        //assign special certifications
        if(certString.includes("M")){
            driver.Manual = true
        }
        if(certString.includes("CA") || certString.includes("A")){
            driver.CDL = true
        }
        if(certString.includes("CH")){
            driver.Chauffeur = true
        }
        drivers.push(driver)
    }
    shuffleDrivers(drivers)
    return drivers
}