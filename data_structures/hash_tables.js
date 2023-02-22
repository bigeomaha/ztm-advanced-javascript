// Downside of hash tables is that they are not ordered
// Hash tables are used to store key-value pairs
// Hash tables are used to implement an associative array or a map, a structure that can map keys to values
// Hash table collisions are handled by separate chaining

const myObjectHash = {
    user: '',
    age: 0,
    say_name: function() {
        console.log(`Hello World, my name is ${this.user}`);
    }
};

// insert
myObjectHash['user'] = 'Eric'; // O(1) MOST of the time, but can be O(n) if there is a collision

// lookup
myObjectHash.say_name(); // O(1)

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        } // O(1) MOST of the time, but can be O(n) if there is a collision
        return undefined;
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            // hash [ [key, value], [[key, value], [key, value]] ]
            if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++) {
                    keysArray.push(this.data[i][j][0]);
                }
            }
        }
        return keysArray;
    }
}

const myHashTable = new HashTable(2);
// If the keys are repeated, the first value will be returned.
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 90);
myHashTable.set('oranges', 20);
myHashTable.set('grapes', 10001);
myHashTable.set('apples', 91);
myHashTable.set('oranges', 21);
myHashTable.keys();

//Given an array of integers [2,5,1,2,3,5,1,2,4]
// find the first recurring character
 function firstRecurring(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (newArr.indexOf(array[i]) !== -1) {
            return array[i];
        } else {
            newArr.push(array[i]);
        }
    }
    return undefined;
 }

 firstRecurring([2,5,1,2,3,5,1,2,4]);