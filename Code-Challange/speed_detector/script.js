//  speed detecting system. speed<70 = ok.
// for every 5km per hour above 70 = i demerit point.
//print total demerit points
// if demerit points are >12 print license suspended.




//we use the .getElementById function to access html content.


document.getElementById("speedDetectorForm").addEventListener("submit", function(event))
{
    event.preventDefault();
    const currentSpeed = document.getElementById("currentSpeed").ariaValueMax;
    const currentSpeedInt = parseInt(currentSpeed);
    //we set the data type to strictly integers.

    //defining the points of demerit.
    const demeritPoints = document.getElementById("demeritPoints").value;
    const demeritPointsInt = parseInt(demeritPoints);

    //speed check logic

    if(currentSpeedInt <= 70){
        console.log("ok");

    }else{
        const exceededSpeed = currentSpeedInt - 70;
        //logic set for over limit value
        const points = math.floor(exceededSpeed / 5)
        const totalPoints = demeritPoints + points;
    
    // we noe console log to display resaults}


}