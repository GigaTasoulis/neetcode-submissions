class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const sumMap = new Map<number,number>();

        for ( let i = 0 ; i < nums.length; i++ ){
            let complement:number = target - nums[i];
            if (sumMap.has(complement)) {
                return [sumMap.get(complement), i]
            }
            sumMap.set(nums[i], i);
        }

    }
}
