// Factory Functions
//  Duplicates any functions in memory (unecessary)
function elf(name, weapon) {
    return {
        name: name,
        weapon: weapon,
        attack() {
            return 'attack with ' + self.weapon
        }
    }
}


// constructor functions
function ELF(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

ELF.prototype.attack = function() {
    return 'attack with ' + this.weapon;
}

// must invoke constructors with NEW
const peter = new ELF('peter', 'rocks');


// ES6 Class Definition
class Elf {
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

const bob = new Elf('bob', 'sword')

// Inheritance
class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return 'Building a fort.'
    }

}

shrek = new Ogre('Shrek', 'club', 'green')