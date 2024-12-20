// code your solution here
// Define the saturdayFun function
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Define the mondayWork function
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

// Define the wrapAdjective function
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

// Exporting functions if required for testing
module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective
};
