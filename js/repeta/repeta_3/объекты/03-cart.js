/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    console.table(this.items)
for (const item of this.items) {
  // console.log(item);

  if (item.name === product.name) {
    // console.log('такой продукт уже есть ', product.name) 
      item.quantity +=1
      return
  }
}
    const newProduct = {
      ...product,
      quantity: 1
    }

    // this.items.push(product);
    this.items.push(newProduct);
  },
  remove(productName) {
  const {items} = this;
    for (let i = 0; i < items.length; i += 1) {
      // const item = this.items[i];
      const { name } = this.items[i];
      // console.log(item);
       console.log(name);

      // if (productName === item.name){
      //   console.log('нашли такой продукт ',productName)
      // }

      if (productName === name){
        console.log('нашли такой продукт ',productName);
        console.log('индекс ', i);

        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    // console.log(this.items);
    const { items } = this

    let total = 0;

    for (const { price, quantity } of this.items) {
      console.log(this.items);

      total += price * quantity;
    }
    return total
  },

   // ДЗ:
  // increaseQuantity(productName) {},
  // decreaseQuantity(productName) {},
};

console.log(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 })
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

cart.remove('🍎');
console.table(cart.getItems());

cart.clear();
console.log(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());


