function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - 42);
  console.log(distanceFromHqInBlocks(50)); 

}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264; 
  console.log(distanceFromHqInFeet(50));

}

function distanceTravelledInFeet(startBlock, endBlock) {
  return Math.abs(startBlock - endBlock) * 264; 
  console.log(distanceTravelledInFeet(30, 25));
}

function calculatesFarePrice(startBlock, endBlock) {
  const distance = distanceTravelledInFeet(startBlock, endBlock);
  console.log(calculatesFarePrice(30, 25));
  console.log(calculatesFarePrice(30, 15)); 
console.log(calculatesFarePrice(30, 10));  
}

function calculatesFarePrice(start, destination) {
  const distance = Math.abs(destination - start) * 264;
  let fare = 0;

  if (distance <= 400) {
      fare = 0;
  } else if (distance <= 2000) {
      fare = (distance - 400) * 0.02;

  } else if (distance > 2000 && distance <= 2500) {
      fare = 25;
  } else {
   
      return "cannot travel that far";
  }

  return fare;
}


console.log(calculatesFarePrice(10, 10)); 
console.log(calculatesFarePrice(10, 15));
console.log(calculatesFarePrice(10, 40)); 
console.log(calculatesFarePrice(10, 50)); 
