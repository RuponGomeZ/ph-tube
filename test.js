// const isVarrified = "";

// console.log(`${isVarrified === true ? "varify" : "not"}`);


function getTimeString(time) {
    // get hour and rest seconds    
    const hour = parseInt(time / 3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return `${hour}h ${minute}m ${remainingSecond}s ago`;
}
console.log(getTimeString(3605));