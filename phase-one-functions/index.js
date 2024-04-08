//functions lab.

//distance from hq function
const hqAdress= 42;//we set a constant address as it doesn't change

function distanceFromHqInBlocks(currentBlock){

    return Math.abs(hqAdress - currentBlock);

}

//distance from hq in feet
function distanceFromHqInFeet(currentBlock){
    //number of blocks
    const blocks = distanceFromHqInBlocks(currentBlock);

    //now calculating in feet
    return blocks * 264 //one block is 264 feet.

}
 //distance travelled in feet.

 function distanceTravelledInFeet(start, destination){
    const distanceInBlocks = Math.abs(destination - start)
    return distanceInBlocks * 264;
 }

 //fare price function.

 function calculateFarePrice(start, destination){
    const distanceInBlocks =Math.abs(destination - start)
    const distanceInFeet = distanceInBlocks * 264;

    //we use the nested if to loop through conditions.

    if(distanceInFeet<= 400){
        return 0;

    }else if(distanceInFeet > 400 && distanceInFeet <= 2000){
      //we set the return value to exclude the first 400 feet.
        return(distanceInFeet -400) * 0.02

    }else if(distanceInFeet>200 && distanceInFeet <=2500){
       //the fare for this condition is set.
        return 25;
    }else{
       //condition for any ride requesting above 2500 feet.
        return 'cannot travel that far';
    }
    
        
    

 }