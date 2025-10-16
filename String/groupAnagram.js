/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    const hashMap = {}

    for(let i =0; i< strs.length;i++){
        let word = strs[i].split("").sort().join()

        if(!hashMap[word]){
            hashMap[word] = []
        }

        hashMap[word].push(strs[i])
    }

    const res = Object.values(hashMap)

    return res

};