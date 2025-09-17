class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    //you are given two different strings called s and t
    //determine a result whether they match (true) else false
    //order doesn't matter but an equal of right characters does
    //s = "racecar", t = "carrace" => true
    //have something that checks character frequency in a string
    //match with a conditional and loop to check against map
    isAnagram(s, t) {
        let map = new Map();

        for(let char of s){
            map.set(char, (map.get(char) || 0) + 1)
        }

        for(let char of t){
            if(!map.has(char)){
                return false;
            }
            map.set(char, (map.get(char) - 1))
            if(map.get(char) === 0){
                map.delete(char);
            }
        }

        return map.size === 0;

        // //if not the same length then return false

        // if(s.length !== t.length){
        //     return false;
        // }

        // //if it exists in the map then increment by 1
        
        // for(let i = 0; i < s.length; i++){
        //     map.set(s[i], (map.get(s[i]) || 0) + 1)
        // }

        // for(let i = 0; i < t.length; i++){
        //     if(!map.has(t[i])){
        //         return false;
        //     }
        //     map.set(t[i], (map.get(t[i]) - 1))
        //     if(map.get(t[i]) === 0){
        //         map.delete(t[i]);
        //     }
        // }

        // return map.size === 0;
    }
}
