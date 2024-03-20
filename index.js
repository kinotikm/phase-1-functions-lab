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
  const distance = Math.abs(destination - start) * 264; // Assuming 1 block = 264 feet
  let fare = 0;

  if (distance <= 400) {
      // Case 1: Gives customers a free sample
      fare = 0;
  } else if (distance <= 2000) {
      // Case 2: Charges 2 cents per foot when total feet travelled is between 400 and 2000
      fare = (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
      // Case 3: Charges 25 dollars for a distance over 2000 feet
      fare = 25;
  } else {
      // Case 4: Does not allow rides over 2500 feet
      return "cannot travel that far";
  }

  return fare;
}

// Test cases
console.log(calculatesFarePrice(10, 10)); // Output: 0 (free sample)
console.log(calculatesFarePrice(10, 15)); // Output: 8.8 (400 * 0.02)
console.log(calculatesFarePrice(10, 40)); // Output: 25 (flat rate for over 2000 feet)
console.log(calculatesFarePrice(10, 50)); // Output: "Ride not allowed" (over 2500 feet)
