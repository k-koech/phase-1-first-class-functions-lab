
const returnFirstTwoDrivers = (drivers) =>
{
    let firstTwoDrivers = []
    firstTwoDrivers = [drivers[0], drivers[1]];
    return firstTwoDrivers
}


const returnLastTwoDrivers = (drivers) =>
{
    let lastTwoDrivers = []
    lastTwoDrivers = [drivers[drivers.length-2], drivers[drivers.length - 1]];
    return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



function createFareMultiplier(x)
{
    return  function(y){ return x*y};
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);



function selectDifferentDrivers(drivers,driversToReturn)
{
    return driversToReturn(drivers);
}



