// Code your solution here
function findMatching (drivers, name) {
    return drivers.filter(driver => driver.toLocaleLowerCase() === name.toLocaleLowerCase());
}

function fuzzyMatch (drivers, name) {
    let fuzzyDrivers = [];
    fuzzyDrivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby');
    return drivers.filter(drivers => drivers.slice(0,2).toLowerCase() === name.toLowerCase());
}

function matchName (drivers, name ) {
    return drivers.filter(drivers => drivers.name === name);
}

