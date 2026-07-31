class Solution {
    topKFrequent(nums, k) {
        const frequencies = new Map();

        for (const num of nums){
            const currentFrequency = frequencies.get(num) ?? 0;
            frequencies.set(num, currentFrequency + 1);
        }

        const entries = [...frequencies]; 

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
