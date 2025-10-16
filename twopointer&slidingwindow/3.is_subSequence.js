var isSubsequence = function (s, t) {
    let pos = 0
    
    for (let i = 0; i < s.length; i++) {
        let isMatched = false
        for (let j = pos; j < t.length; j++) {
            if (s[i] === t[j]) {
                pos = j + 1
                isMatched = true
                break
            }
        }
        if (!isMatched) {
            return false
        }

    }

    return true
};


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {

    let sp = 0
    let tp = 0

    while (sp < s.length && tp < t.length) {
        if (s[sp] === t[tp]) {
            sp++
        }
        tp++
    }

    return sp === s.length

};