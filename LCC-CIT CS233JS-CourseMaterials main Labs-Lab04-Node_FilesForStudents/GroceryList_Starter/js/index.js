


import { GroceryController } from './controller.js';
import { GroceryModel } from './model.js';
import { GroceryView } from './view.js';




/* ========== Initialization ========== */

document.addEventListener('DOMContentLoaded', () => {
  new GroceryController(new GroceryModel(), new GroceryView());
});
