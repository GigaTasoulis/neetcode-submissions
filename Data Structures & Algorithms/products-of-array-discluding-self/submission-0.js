class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = 1;
        let suffix = 1;
        let right = [];
        let left = [];
        let result =[];

        for (let i=0; i < nums.length; i++){
            right[i] = prefix;
            prefix *= nums[i];
        }
            console.log(right);


        for (let i = nums.length - 1; i >= 0; i--){
            left[i] = suffix;
            suffix *= nums[i];

        }

        for (let i = 0; i < nums.length; i++){
            result.push(left[i]*right[i]);
        }

        return result;
    }
}
