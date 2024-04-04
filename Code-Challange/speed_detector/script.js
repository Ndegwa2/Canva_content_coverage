//  speed detecting system. speed<70 = ok.
// for every 5km per hour above 70 = i demerit point.
//print total demerit points
// if demerit points are >12 print license suspended.




//we use the .getElementById function to access html content.


document.getElementById("speedDetectorForm").addEventListener("submit", function(event))
{
    event.preventDefault();
    const currentSpeed = document.getElementById("currentSpeed").value;
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
        const points = Math.floor(exceededSpeed /5);
        const totalPoints = demeritPointsInt + points;

        //we now display the values.

        console.log(`Your points are ${points} demerit points`);
        console.log(`Exceeded the limit by ${exceededSpeed} km/hr`);
        console.log(`your current points of demerit are ${totalPoints}points`);

        //having displayed the result, we proceed to the output response.

        if(totalPoints > 12){
            console.log("License suspended");
        }else{
            console.log("Drive safe, nice driving!");
        }
        }


}