
/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.*/

const map = new Map(); // Create a new hash map to store values and their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the complement
        
        // Check if the complement exists in the map
        if (map.has(complement)) {
            return [map.get(complement), i]; // Return the indices of the complement and the current number
        }
        
        // Store the current number with its index in the map
        map.set(nums[i], i);
    }

    // If no solution found, return an empty array (though the problem guarantees one solution)
    return [];