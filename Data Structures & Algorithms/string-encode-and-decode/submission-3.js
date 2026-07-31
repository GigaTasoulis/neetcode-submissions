class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let output = "";

        for (const word of strs) {
            output += `${word.length}#${word}`;
        }
        return output;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            let index = str.indexOf("#", i);
            let wordLength = Number(str.slice(i, index));
            let slicedWord = str.slice(index + 1, index + 1 + wordLength);

            i = index + 1 + wordLength;
            result.push(slicedWord);
        }

        return result;
    }
}
