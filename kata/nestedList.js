// DESCRIPTION:
// Hi! Welcome to my first kata.

// In this kata the task is to take a list of integers and a key, and group the list according to a simple rule: ints greater than or equal to the key, and ints less than the key.

// You are to return a nested list. If the list is empty, simply return an empty list.

// Confused? Okay, let me walk you through an example...

// The input is: [1, 1, 1, 0, 0, 6, 10, 5, 10], the key is: 6
// Okay so the first five numbers are less than the key, 6, so we group them together.

// [1, 1, 1, 0, 0]
// The next two numbers, 6 & 10, are both >= 6 to they belong in a separate group, which we will add to the first group. Like so:

// [[1, 1, 1, 0, 0], [6, 10]]
// The next two numbers are 5 & 10. Since the key is 6 these two numbers form separate groups, which we will add to the previous result. like so:

// [[1, 1, 1, 0, 0], [6, 10], [5], [10]]
// And voila! We're done.

// Here are a few more basic examples:

// group_ints([1, 0], key= 0)  
// --> [[1,0]]

// group_ints([1, 0, -1, 5], key= 0) 
// --> [[1, 0], [-1], [5]]

// group_ints([1, 0, -1, 5], key= 5) 
// --> [[1, 0, -1], [5]]


function groupInts(arr, key) {
  if (arr.length === 0) return [];
  
  let result = [];
  let currentGroup = [];
  let isCurrentGroupLessThanKey = arr[0] < key;
  
  for (let num of arr) {
    if (num < key && isCurrentGroupLessThanKey) {
      currentGroup.push(num);
    } else if (num >= key && !isCurrentGroupLessThanKey) {
      currentGroup.push(num);
    } else {
      result.push(currentGroup);
      currentGroup = [num];
      isCurrentGroupLessThanKey = num < key;
    }
  }
  
  if (currentGroup.length > 0) {
    result.push(currentGroup);
  }
  
  return result;
}

// Test cases
console.log(groupInts([1, 1, 1, 0, 0, 6, 10, 5, 10], 6)); // [[1, 1, 1, 0, 0], [6, 10], [5], [10]]
console.log(groupInts([1, 0], 0)); // [[1, 0]]
console.log(groupInts([1, 0, -1, 5], 0)); // [[1, 0], [-1], [5]]
console.log(groupInts([1, 0, -1, 5], 5)); // [[1, 0, -1], [5]]
console.log(groupInts([], 5)); // []


function groupInts(xs,x) {
  if (xs == []) {
    return []
  }
  let target = 0
  const results = []
  
  xs.forEach((v, i, a) => {
    if (i == 0) {
      results.push([v])
    } else if ((v < x) === (a[i-1] < x)) {
      results[target].push(v)
    } else {
      target++
      results.push([v])
    }
  })
  return results;
}

function groupInts(list, key) {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    const lastEntry = result.at(-1);
    if (
      (list[i] < key && lastEntry?.[0] < key) ||
      (list[i] >= key && lastEntry?.[0] >= key)
    ) {
      lastEntry.push(list[i]);
    } else {
      result.push([list[i]]);
    }
  }
  return result;
}

function groupInts(input, key) {
  
  let resultArray = []
  let groupArray = []
  
  let isBigger = true
  
  for(let i = 0; i < input.length; i++) {
    // is item smaller or equal to the key? Yes, ask next item. No, push to new array.
  groupArray.push(input[i])
    
  if(input[i] < key && input[i + 1] >= key || input[i] >= key && input[i+1] < key || i === input.length - 1) {
    resultArray.push(groupArray);
    groupArray = []
  }
  }

  return resultArray
}