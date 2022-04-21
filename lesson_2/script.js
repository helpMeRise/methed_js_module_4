
const Cart = function (goods = [], totalPrice, count) {
    this.goods = goods;
    this.totalPrice = totalPrice;
    this.count = count;
}



Cart.prototype.calculateGoodsPrice = function () {
    this.goods.forEach(item => {
    this.totalPrice += item.price;
    });
}

Cart.prototype.addGoods = function (good) {
    this.goods.push(good);
    this.increaseCount();
}

Cart.prototype.getTotalPrice = function () {
    this.calculateGoodsPrice()
    return this.totalPrice;
}

Cart.prototype.increaseCount = function () {
    this.count++;
}

Cart.prototype.count = function () {
    this.goods = [];
    this.totalPrice = 0;
    this.count = 0;
}

Cart.prototype.print = function () {
    console.log(JSON.stringify(this.goods));
    console.log(this.getTotalPrice());
}

const Goods = function (price, name, discount) {
    this.price = price;
    this.name = name;
    this.discount = discount;
}

const FoodGoods = function (price, name, discount, calories = 0) {
    Goods.call(this, price, name, discount);
    this.calories = calories;
}

const ClothingGoods = function (price, name, discount, material = '') {
    Goods.call(this, price, name, discount);
    this.material = material;
}

const TechnicsGoods = function (price, name, discount, techType = '') {
    Goods.call(this, price, name, discount);
    this.techType = techType;
}

Object.setPrototypeOf(Goods.prototype, Cart.prototype);
Object.setPrototypeOf(FoodGoods.prototype, Goods.prototype);
Object.setPrototypeOf(ClothingGoods.prototype, Goods.prototype);
Object.setPrototypeOf(TechnicsGoods.prototype, Goods.prototype);

const apple = new FoodGoods(100, 'яблоко', 0);
const shirt = new ClothingGoods(150, 'рубашка', 0, 'кожа');
const phone = new TechnicsGoods(1000, 'телефон', 0, 'смартфон');


const good = new Cart([], 0, 0);
good.addGoods(apple);
good.addGoods(shirt);
good.addGoods(phone);

good.print();
