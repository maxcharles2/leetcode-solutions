// https://leetcode.com/problems/min-stack/description/

class MinStack {
    constructor(val) {
        this.val = val;
        this.items = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        return this.items.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        return this.items.pop()
    }

    /**
     * @return {number}
     */
    top() {
        // return this.items.length[this.i]
        let lastVal = 0;
        for(let i = 0; i < this.items.length; i++){
            lastVal = this.items[this.items.length - 1];
        }
        return lastVal;
    }

    /**
     * @return {number}
     */
    getMin() {
        let smallestVal = Infinity;

        for(let i = 0; i < this.items.length; i++){
            if(this.items[i] < smallestVal){
                smallestVal = this.items[i];
            }
        }

        return smallestVal;
    }
}
