// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(drivers.length - 2, drivers.length);
}

var selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]; 

function createFareMultiplier(multi) {
    return function fareMultiplier(fare){ 
        return multi * fare;
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers);
}

