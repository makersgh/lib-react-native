import { BaseClass } from '../../baseClasses';
import { ICartItem } from './types';

export interface CartItem extends ICartItem {}
export class CartItem extends BaseClass {
  constructor(cartItem: CartItem) {
    super();
    this.fromObject(cartItem);
  }

  total() {
    return this.quantity * this.price;
  }
}
