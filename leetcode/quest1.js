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