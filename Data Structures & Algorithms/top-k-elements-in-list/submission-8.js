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

        const buckets = [];

        for(let i=0; i <= nums.length; i++){
            buckets.push([]);
        }
        // each bucket contains the numbers that have the same frequency.
        // bucket[0] means frequency 0.
        // bucket[1] means frequency 1. etc.
        for (const [num, freq] of frequencies){
            buckets[freq].push(num)
        }

        const results = [];
        console.log(frequencies);
        console.log(buckets);
        for (let freq = buckets.length - 1; freq > 0 ; freq--){
            for (const num of buckets[freq]){
                results.push(num)
                if (results.length === k) return results;
            }
        }
        
        return results;
    }
}
