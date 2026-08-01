class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let output = '';
        for (const str of strs){
            output += `${str.length}#${str}`;
        }
        return output;

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0 ;
        let result = [];
        while ( i < str.length){
            let index = str.indexOf('#', i);
            let wordLength = Number(str.slice(i , index));
            let output = str.slice(index+1, index+1 + wordLength);
            i = index + 1 + wordLength;
            result.push(output);
        }

        return result;
    }
}
