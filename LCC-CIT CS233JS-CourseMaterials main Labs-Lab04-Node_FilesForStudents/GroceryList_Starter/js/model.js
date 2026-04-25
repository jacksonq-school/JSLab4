/* ========== Model ========== */

export class GroceryModel {
  constructor() {
    try {
       // array to hold groceries
      const savedGroceries = JSON.parse(localStorage.getItem("keepGroceries"));// TODO: Add a line of code that retrieves groceries from local storage into savedGroceries 
      // DONE
      if (!Array.isArray(savedGroceries) || !this.allValid(savedGroceries)) {
        throw new Error('Invalid grocery payload');
      }
      this.groceries = savedGroceries;
    } catch (e) {
      // Provide starter entries if local storage is empty/corrupt.
      this.groceries = [
        { itemName: 'Apples', quantity: '5' },
        { itemName: 'Milk', quantity: '1 gallon' }
      ];
    }
  }

  isValidItem(item) {
    return (
      typeof item === 'object' &&
      item !== null &&
      typeof item.itemName === 'string' &&
      typeof item.quantity === 'string'
    );
  }

  allValid(groceries) {
    for (let i = 0; i < groceries.length; i++) {
      if (!this.isValidItem(groceries[i])) {
        return false;
      }
    }
    return true;
  }

  commit(groceries) {
    // TODO: write this method

    this.groceries = groceries;
    localStorage.setItem("keepGroceries", JSON.stringify(groceries));
    this.onGroceryListChanged(groceries);

  }

  subscribeGroceryListChanged(callback) {
    this.onGroceryListChanged = callback;
  }

  addGrocery(itemName, quantity) {
    const newGrocery = { itemName, quantity };
    this.groceries.push(newGrocery);
    this.commit(this.groceries);

    return true;
  }

  deleteGrocery(index) {
    // TODO: Remove the grocery from the array and update local storage.

    this.groceries.splice(index, 1);

    this.commit(this.groceries);

  }
}
