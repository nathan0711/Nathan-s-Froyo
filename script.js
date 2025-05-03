// Prompt the user to enter their froyo flavors
const input = prompt("Enter a list of froyo flavors (comma-separated):");

// Convert the input string into an array of flavors
const flavorArray = input.split(',');

// Count the number of times each flavor appears
function countFlavors(array) {
  const flavorCount = {};

  for (let flavor of array) {
    flavor = flavor.trim().toLowerCase(); // Clean up input a bit
    if (flavorCount[flavor]) {
      flavorCount[flavor] += 1;
    } else {
      flavorCount[flavor] = 1;
    }
  }

  return flavorCount;
}

// Call the function and log the result as a table
const result = countFlavors(flavorArray);
console.table(result);