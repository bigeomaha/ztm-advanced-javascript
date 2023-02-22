const strings = ['a', 'b', 'c', 'd'];

// push
strings.push('e'); // O(1)

// pop
strings.pop(); // O(1)

// unshift
strings.unshift('x'); // O(n)

// splice
strings.splice(2, 0, 'alien'); // O(n) n is the number of elements to be shifted, not simply the size of the array



class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this._shiftItems(index);
        return item;
    }

    _shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    reverse() {
        newArray = this.print_reverse();
        this.data = newArray.data;
        this.length = newArray.length;
    }

    print_reverse() {
        const newArray = new MyArray();
        for (let i = this.length - 1; i >= 0; i--) {
            newArray.push(this.data[i]);
        }
        return newArray;
    }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('Eric');
newArray.push('!');

console.log(newArray.print_reverse());


function reverse(str) {
    // check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        throw Error('Function Requires a string');
    }

    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }
    return backwards.join('');
}

console.log(reverse ('Eric'));


function mergeSortedArrays(arr1, arr2) {

    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw Error('Function Requires arrays');
    }

    // check input
    if (arr1.length === 0) {
        return arr2;
    }
    if (arr2.length === 0) {
        return arr1;
    }

    const mergedArray = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 1;
    let j = 1;


    while (arr1Item || arr2Item) {
        if (!arr2Item || arr1Item < arr2Item) {
            mergedArray.push(arr1Item);
            arr1Item = arr1[i];
            i++;
        } else {
            mergedArray.push(arr2Item);
            arr2Item = arr2[j];
            j++;
        }
    }
    return mergedArray;
}