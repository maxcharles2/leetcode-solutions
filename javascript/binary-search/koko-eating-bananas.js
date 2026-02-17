// https://leetcode.com/problems/koko-eating-bananas/description/

class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let result = right;

        const canFinish = (speed) => {
            let hours = 0;
            for (const pile of piles) {
            hours += Math.ceil(pile / speed);
            }
            return hours <= h;
        };

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (canFinish(mid)) {
            result = mid;   // possible to finish — try smaller speed
            right = mid - 1;
            } else {
            left = mid + 1; // too slow — increase speed
            }
        }

        return result;
    }
}
