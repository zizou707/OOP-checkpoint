class Product {
    constructor(id,name,price){
        this.id=id;
        this.name=name;
        this.price=price;
    }
}
class Card_item extends Product{
    constructor(product,quantity){
        super(Product)
        this.product=product;
        this.quantity=quantity;
    }
    totalPrice(item3){return this.price*this.quantity}
}
class ShoppingCard extends Card_item {
    
    constructor(items){
        super(Card_item)
        this.items=[];
    }
    TotalItems(){return `there is ${this.items.length} items in this Card`}
    addCard(cart_item){return this.items.push(cart_item)}
    removeCard(cart_item){
        this.items=this.items.filter(i=>{return i.quantity != cart_item.quantity})
    }
    DisplayItems(){console.log(cart_global);}
}

var product1 = new Product('001','product_1','45£');
var product2 = new Product('002','product_2','50£');
var product3 = new Product('003','product_3','55£');

var item1=new Card_item(product1,4);
var item2=new Card_item(product2,3);
var item3=new Card_item(product3,2);

var cart_global = new ShoppingCard();


cart_global.addCard(item1);
cart_global.addCard(item2);
cart_global.addCard(item3);

console.log(cart_global.TotalItems());
//cart_global.removeCard(item3);


cart_global.DisplayItems();