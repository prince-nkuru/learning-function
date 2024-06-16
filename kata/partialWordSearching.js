/*DESCRIPTION:
Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

The method takes two parameters, the query string and the array of strings to search, and returns an array.

If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

Examples
If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].*/

function searchStrings(query, array) {
  // Convert query to lowercase
  const lowerCaseQuery = query.toLowerCase();
  // Initialize an empty array to hold the results
  const results = [];

  // Iterate through each string in the array
  array.forEach(str => {
    // Convert the current string to lowercase
    const lowerCaseStr = str.toLowerCase();
    // Check if the current string contains the query
    if (lowerCaseStr.includes(lowerCaseQuery)) {
      // If it does, add the original string to the results
      results.push(str);
    }
  });

  // If no matches were found, return an array containing "Empty"
  if (results.length === 0) {
    return ["Empty"];
  }

  // Otherwise, return the results array
  return results;
}
