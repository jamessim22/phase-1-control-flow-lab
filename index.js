function scuberGreetingForFeet(rideDistance){
  // Write your code here!
  if (rideDistance <= 400) {
    return `This one is on me!`;
  }

  else if (400 < rideDistance && rideDistance < 2000) {
    return `That will be twenty bucks.`;
  }
 
  else if (2000 < rideDistance && rideDistance < 2500) {
    return `I will gladly take your thirty bucks.`;
  }

  else if (rideDistance > 2500) {
    return `No can do.`;
  }

}

function ternaryCheckCity(someCity){
  // Write your code here!
  if (someCity === "NYC") {
    return `Ok, sounds good.`;
  }
  else {
    return `No go.`;
  }

}

function switchOnCharmFromTip(tipAmount){
  // Write your code here!
  if (tipAmount === "generous") {
    return `Thank you so much.`;
  }

  else if (tipAmount === "not as generous") {
    return `Thank you.`;
  }

  else {
    return `Bye.`;
  }
}