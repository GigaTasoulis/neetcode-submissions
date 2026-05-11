class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let aMap = new Map<string,string[]>();
        
        for ( let word of strs){
            let anagram = word.split('').sort().join('');
            // split the characters e.g 'c' 'a' 't', sort them, and then rejoin them

            if (aMap.has(anagram) == false) {
                aMap.set(anagram, [word]);
            }
            else{
                aMap.get(anagram).push(word)
            }
            
        }
    return [...aMap.values()]
    }
}