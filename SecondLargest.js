function findSecondLargest(arr) {
    // Remove duplicates using Set, and then convert it back to an array
    const uniqueArr = [...new Set(arr)];
  
    // Sort the array in descending order
    uniqueArr.sort((a, b) => b - a);
  
    // Return the second element in the sorted array
    return uniqueArr.length >= 2 ? uniqueArr[1] : null; // Return null if no second largest
  }
  
  // Example usage
  const numbers = [10, 5, 8, 12, 5, 12];
  const secondLargest = findSecondLargest(numbers);
  console.log(secondLargest); // Output: 10
  