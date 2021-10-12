function seerToMon(seers){
    // Error handling
    if(typeof seers == 'string'){
        return 'please enter the number.';
    }
    if(seers <0){
        return 'Enter the positive number.';
    }
    
    // mon calculation
    const monCount = seers / 40;
    return monCount;
}
// const mySeer=seerToMon(-1600);
// const mySeer=seerToMon('saba');
const mySeer=seerToMon(1600);
console.log(mySeer);