const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
}
const returnLastTwoDrivers= function (drivers) {
    return drivers.slice(2,)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function(fare) {
        return fare * num
    }
}
const fareDoubler = createFareMultiplier => createFareMultiplier * 2;

const fareTripler = createFareMultiplier => createFareMultiplier * 3;

function selectDifferentDrivers(drivers, selectingDrivers ) {
    return selectingDrivers(drivers);
}