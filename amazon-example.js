class Item {
    constructor(name, price){
        this.item_name = name;
        this.item_price = price;
        // These are calculated by the Cart
        this.tax = null;
        this.total = null;
    }
}

class User {
    constructor(name, active) {
        this.name = name;
        this.active = active;
        this.purchases = [];
    }
    purchase(Item) {
        this.purchases.push(Item);
    }
    refund(Item){
        idx = this.purchases.indexOf(Item);
        if (idx != -1) {
            this.purchases = this.purchases.splice(idx, 1)
        }
        else {
            throw new Error('Can not refund item: ' + Item.name);
        }
    }

}

class UserCart extends User {
    constructor(User) {
        super(User.name, User.active);
        this.cart = [];
        this.current_total = 0;
        this.item_count = 0;
    }
    addToCart(Item) {
        Item.tax = Item.item_price * .03
        Item.total = Item.item_price + Item.tax
        this.cart.push(Item)
        this._setTotal()
    }
    checkout() {
        this.cart.forEach(Item => {
            console.log(Item)
            super.purchase(Item)
        });
        this.clearCart()
        return 'Purchase Completed!'
    }
    clearCart() {
        this.cart = new Array();
        this.current_total = 0;
        this.item_count = 0;
    }
    _setTotal() {
        let total = 0
        this.cart.forEach((Item, idx) => {
            total += Item.total;
            this.item_count = idx +1;
        })
        // perform rounding after completion to reduce lost revenue in large carts.
        this.current_total = total.toFixed(2)
    }
    removeFromCart(Item) {
        idx = this.cart.indexOf(Item);
        // Silently fail if nothing to remove.
        if (idx != -1) {
            this.cart = this.cart.splice(idx, 1)
        }
        this._setTotal();
    }
    showCartSummary() {
        return `${this.name} has ${this.item_count} items totaling ${this.current_total} dollars.`;
    }
}


const chips = new Item('chips', 2.50);
const drink = new Item('drink', 1.25);
const sandwhich = new Item('sandwich', 4.75);

const bob = new User('bob');
const bobscart = new UserCart(bob);


