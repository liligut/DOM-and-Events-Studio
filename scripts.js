// Write your JavaScript code here.
window.addEventListener("load", function() {
    // put DOM code here to ensure elements have been loaded
    let flightStatus = '';
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
   
    let takeoffButton  = document.getElementById("takeoff");
    takeoffButton.addEventListener("click", function (event) {
       if (window.confirm("Confirm that the shuttle is ready for takeoff."))
       {
            flightStatus = "Shuttle in flight.";
            document.getElementById("status").innerHTML = flightStatus;
            document.getElementById("shuttleBackground").style.backgroundColor = 'blue'; 
            shuttleHeight.innerText = String(Number(shuttleHeight.innerHTML)+10000);
       }
    });
    // Land button
    let landButton  = document.getElementById("landing");
    landButton.addEventListener("click", function (event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus = "The shuttle has landed.";
        document.getElementById("status").innerHTML = flightStatus;
        document.getElementById("shuttleBackground").style.backgroundColor = 'green'; 
        shuttleHeight.innerHTML = String(0);
    });
    // Abort button
    let abortButton  = document.getElementById("missionAbort");
    abortButton.addEventListener("click", function (event) {
       if (window.confirm("Confirm that you want to abort the mission."))
       {
          flightStatus = "Mission aborted.";
          document.getElementById("status").innerHTML = flightStatus;
          document.getElementById("shuttleBackground").style.backgroundColor = 'green'; 
          shuttleHeight.innerHTML = String(0);
       }
    });
    //Up

    
    let rocket = document.getElementById("rocket");
    rocket.style.position = 'absolute';
    
    let upButton  = document.getElementById("up");
    upButton.addEventListener("click", function (event) {
    
      let top = rocket.style.top;
      let y = Number(top.slice(0, top.indexOf('px')));
      rocket.style.top = String(y - 10)+'px';
      shuttleHeight.innerHTML = String(Number(shuttleHeight.innerHTML)+10000);
    });

    //Down

    let downButton  = document.getElementById("down");
    downButton.addEventListener("click", function (event) {
        
      let top = rocket.style.top;
      let y = Number(top.slice(0, top.indexOf('px')));
      rocket.style.top = String(y + 10)+'px';
      shuttleHeight.innerHTML = String(Number(shuttleHeight.innerHTML)-10000);
        
    });

    //Right
    let rightButton  = document.getElementById("right");
    rightButton.addEventListener("click", function (event) {

      let left = rocket.style.left;
      let x = Number(left.slice(0, left.indexOf('px')));
      rocket.style.left = String(x + 10)+'px';

    });
    //Left
    let leftButton  = document.getElementById("left");
    leftButton.addEventListener("click", function (event) {

      let left = rocket.style.left;
      let x = Number(left.slice(0, left.indexOf('px')));
      rocket.style.left = String(x - 10)+'px';

    });

});
// Remember to pay attention to page loading!