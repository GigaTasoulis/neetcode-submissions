class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencies = new Map();

        for (const num of nums){
            const currentFrequency = frequencies.get(num) ?? 0;
            frequencies.set(num, currentFrequency + 1);
        }

        const entries = [...frequencies]; 

        // each entry is an inner array [1, 1] vs [2, 2]
        entries.sort((a,b) => b[1] - a[1])

        const results = [];
        
        for (const [num] of entries){
            results.push(num);

            if (results.length === k){
                break;
            }
        }
        
        return results;
    }
}
