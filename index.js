// Code your solution here
function findMatching(arr, str) {
    return arr.filter(function (name) {
        return name.toLowerCase() === str.toLowerCase();
    });
}

function fuzzyMatch(names, str) {
    return names.filter(function (name) {
        return name.slice(0, str.length) === str;
    })
}

function matchName(drivers, str) {
    return drivers.filter(obj => obj.name === str)
}