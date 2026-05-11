class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    capacity: number; //overall capacity of the array
    size: number; // current amount of contents inside the content array
    content: Array<number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.size = 0;
        this.content = [];
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.content[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.content[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if(this.capacity === this.size){
            this.resize();
        }
        this.content[this.size] = n;
        this.size += 1;
    }

    /**
     * @returns {number}
     */
    popback(): number {
        let temp = this.content[this.size-1];
        this.size -= 1;
        return temp;

    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity *= 2;
        this.content = [...this.content, ...new Array(this.capacity / 2)] // create a whole new Array by copying the existing one so
        // Time complexity O(n) when resize() is triggered
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity;
    }
}
