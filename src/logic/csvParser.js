export const keyData = (matrix) => {
    const keys = []
    matrix.forEach(arr => {
        const keyBuilder = {}
        let potentialVIN = arr[3]
        if(potentialVIN && potentialVIN.length === 8){
            keyBuilder.vin = potentialVIN
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