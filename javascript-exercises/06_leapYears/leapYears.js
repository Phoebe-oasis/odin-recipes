const leapYears = function(year) {

    let leapYear = false;
    // if(year % 4 === 0){
    //     if(year % 100 === 0){
    //         leapYear = year % 400 === 0? true : false;
    //     }else{
    //         leapYear = true;
    //     }
    // }

    leapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
    return leapYear;
};

// Do not edit below this line
module.exports = leapYears;
