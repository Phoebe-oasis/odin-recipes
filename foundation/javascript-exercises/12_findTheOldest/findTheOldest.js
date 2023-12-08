const findTheOldest = function(people) {
    return people.reduce((oldest, current)=>{
        oldest = !oldest.name ? current : oldest;
        let oldestAge = calAge(oldest);
        let currentAge = calAge(current);
        return oldestAge < currentAge ? current : oldest;

    },{})
};

function calAge(current){
    let currentAge;
    if(current.yearOfDeath){
        currentAge = current.yearOfDeath - current.yearOfBirth;
    }else{
        currentAge = (new Date()).getFullYear() - current.yearOfBirth;
    }
    return currentAge;
}

// Do not edit below this line
module.exports = findTheOldest;
