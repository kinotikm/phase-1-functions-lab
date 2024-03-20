// Function to calculate distance from the headquarters in blocks
function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - 42);
}

// Function to calculate distance from the headquarters in feet
function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264; // Assuming 1 block = 264 feet
}

// Function to calculate distance travelled in feet
function distanceTravelledInFeet(startBlock, endBlock) {
  return Math.abs(startBlock - endBlock) * 264; // Assuming 1 block = 264 feet
}

// Function to calculate fare price
function calculatesFarePrice(startBlock, endBlock) {
  const distance = distanceTravelledInFeet(startBlock, endBlock);
  let fare;

  if (distance <= 400) {
      fare = 0;
  } else if (distance <= 2000) {
      fare = (distance - 400) * 0.02;
  } else if (distance <= 2500) {
      fare = 25;
  } else {
      (distance > 2500)
      return "cannot travel that far";
  }

  return fare;
}

// Test cases
console.log(distanceFromHqInBlocks(50)); // 8 blocks away
console.log(distanceFromHqInFeet(50)); // 8 blocks * 264 feet/block = 2112 feet
console.log(distanceTravelledInFeet(30, 25)); // 5 blocks * 264 feet/block = 1320 feet
console.log(calculatesFarePrice(30, 25)); // $26.40 (1320 * 0.02)
console.log(calculatesFarePrice(30, 15)); // $25 (flat rate for over 2000 feet)
console.log(calculatesFarePrice(30, 10)); // "Ride not allowed" (over 2500 feet)
