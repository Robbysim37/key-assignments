export const createAssignments = (assignedKeys, unassignedKeys) => {
    const assignedKeysExport = []
    const unassignedKeysExport = []

    assignedKeys.forEach(keyDriverPair => {
        const keyRow = []
        const nameArr = keyDriverPair.name.split(" ")
        keyRow.push(keyDriverPair.group)
        keyRow.push(keyDriverPair.vin)
        keyRow.push(keyDriverPair.rank)
        keyRow.push(nameArr[0])
        keyRow.push(nameArr[1])
        keyRow.push(keyDriverPair.id)
        assignedKeysExport.push(keyRow)
    });

    unassignedKeys.forEach(keyDriverPair => {
        const keyRow =[]
        keyRow.push(keyDriverPair.group)
        keyRow.push(keyDriverPair.vin)
        keyRow.push(keyDriverPair.rank)
        unassignedKeysExport.push(keyRow)
    })

    const rows = assignedKeysExport 
    unassignedKeysExport.forEach(element => {
        rows.push(element)
    })
    
    let csvContent = "data:text/csv;charset=utf-8," 
        + rows.map(e => e.join(",")).join("\n");

    let encodedUri = encodeURI(csvContent);

    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "driverAssignments.csv");
    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the data file named "my_data.csv".
}