class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let n1 = nums.length;
        const nums2 = new Set(nums);
        let n2 = nums2.size;
        if ( n1 === n2){
            return false
        }else{
            return true
        }
    }
}
