class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const counts = new Map();
        for (const ch of s){
            counts.set(ch, (counts.get(ch) ?? 0) + 1)
        }
        for (const ch of t){
            let value = counts.get(ch)
            if ( value === 0 || value === undefined){
                return false;
            }
            else{
                counts.set(ch, (counts.get(ch) ?? 0) - 1)
            }
        }
        return true;
    }
}
