class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        let anagramMap = new Map<string, number>();

        for ( let i = 0 ; i < s.length; i ++){
            anagramMap.set(s[i], (anagramMap.get(s[i]) ?? 0) + 1);
        }
        
        for ( let j = 0 ; j < t.length; j ++){
            anagramMap.set(t[j], (anagramMap.get(t[j]) ?? 0) - 1)
        }

        for (let k = 0 ; k < s.length; k++){
            if (anagramMap.get(s[k]) !== 0) return false;
        }

        return true;

    }
}
