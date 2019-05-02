module.exports = class Cart {
  // let listOfItemsWithQty = new Array();

  constructor() {
    this.totalPrice = 0;
    this.item = null;
    this.listOfItemsWithQty = [];
  }

  addItem(item, qty) {
    this.listOfItemsWithQty.push({
      "key":item,
      "value": qty
    });
    //console.log(this.listOfItemsWithQty);
  }

  getItems() {
    return this.listOfItemsWithQty;
  }

  getItemsList() {
    const s= this.listOfItemsWithQty[0].key.name+" x"+this.listOfItemsWithQty[0].value+" - "+"$"+(this.listOfItemsWithQty[0].key.price).toFixed(2);
    return s;
  }

  getItemsListForOnSaleItems() {
    return this.listOfItemsWithQty.filter(x=>x.key.onSale==true).map(x=>x.key.name+" x"+x.value+" - "+"$"+x.key.price.toFixed(2)).toString();

  }


  getTotalPrice(){
    //console.log(this.listOfItemsWithQty)
    var total=0;
    total=this.listOfItemsWithQty.reduce((prev, cur)=> {
      return prev + cur.key.price;
    }, 0);
    return total
  }
}
