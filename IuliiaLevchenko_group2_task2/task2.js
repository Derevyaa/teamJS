// Given array
let array = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];

// Display the given array
document.getElementById("given").innerText = "Given array: " + array.join(", ");

// Function to replace positive values with "*"
function replacePositiveValues() {
  // Find all positive values and replace them with "*"
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      array[i] = "*";
    }
  }

  // Get the div where you want to display the array
  const outputDiv = document.getElementById("output");

  // Display the array in the output div
  outputDiv.innerText =
    "Array with positive values replaced by '*': " + array.join(", ");
}
