const Cart = require('../src/Cart.js');
const Item = require('../src/Item.js');
const expect = require('chai').expect;

describe('Cart', () => {
    it('should initialize as empty', () => {
        const cart = new Cart();
        expect(cart.item).to.deep.equal(null)
        expect(cart.totalPrice).to.be.equal(0)
    });

    describe('addItem', () => {
      it('should add and display items in the array', () => {
          // Arrange
          let cart
          let items = new Item("handbag", 500, true);

          // Actss
          cart = new Cart();
          cart.addItem(items, 2);

          // Assert
          expect(cart.getItems().length).to.equal(1);
      });
    });



    describe('item', () => {
        it("return string of item and price", () => {
            const cart = new Cart();
            //let item1 = new Item("Watch", 20000, true);
            let item2=new Item("Handbag", 500.00, true);
            // Actss
            //cart = new Cart();
            cart.addItem(item2, 1);
            //cart.addItem(item2, 2);
            // Assert
            expect(cart.getItemsList()).to.equal('Handbag x1 - $500.00');
        });
        });


    describe('onSaleItems', () => {
        it("return itenms which are on sale", () => {
            const cart = new Cart();
            //let item1 = new Item("Watch", 20000, true);
            let item1=new Item("Handbag", 500.00, true);
            let item2=new Item("Watch", 20000.00, true);

            let item3=new Item("Drone", 35000.00, false);

            let item4=new Item("Light Saber", 16000.00, true);
            // Actss
            //cart = new Cart();
            cart.addItem(item1, 1);
            cart.addItem(item2, 2);
            cart.addItem(item3, 4);
            cart.addItem(item4, 10);
            //cart.addItem(item2, 2);
            // Assert
            expect(cart.getItemsListForOnSaleItems()).to.equal('Handbag x1 - $500.00,Watch x2 - $20000.00,Light Saber x10 - $16000.00');
        });
        });


      describe('totalPrice', () => {
          it("return the total price of the items in the cart", () => {
              //const cart = new Cart();
              let item1 = new Item("Watch", 20000, true);
              let item2=new Item("Handbag", 500.00, true);
              // Actss
              const cart = new Cart();
              cart.addItem(item2, 1);
              cart.addItem(item2, 2);
              //Assert
              expect(cart.getTotalPrice()).to.equal(1000);
          });
          });

});
