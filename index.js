// index.js

// Function to calculate distance in blocks from headquarters
function distanceFromHqInBlocks(blocks) {
    const headquarters = 42; // Assuming HQ is at block number 42
    return Math.abs(blocks - headquarters);
}

// Function to calculate distance in feet from headquarters
function distanceFromHqInFeet(blocks) {
    const blockInFeet = 264; // Assuming 1 block = 264 feet
    return distanceFromHqInBlocks(blocks) * blockInFeet;
}

// Function to calculate distance travelled in feet
function distanceTravelledInFeet(startBlock, endBlock) {
    const blockInFeet = 264; // Assuming 1 block = 264 feet
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    return distanceInBlocks * blockInFeet;
}

// Function to calculate fare price based on distance travelled
function calculatesFarePrice(startBlock, endBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);

    // Logic for fare calculation
    let fare;
    if (distanceInFeet <= 400) {
        fare = 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        fare = (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        fare = 25;
    } else {
        fare = "cannot travel that far"; // Adjusted to match test expectation
    }

    return fare;
}

// Export all functions
module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
};
