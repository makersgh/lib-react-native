import Parse from 'parse/react-native';
import { Address, Cart, Order, PaymentMethod, Shop, User } from '../..';

export interface ICustomer extends Parse.Object {
  user: User;
  fullname: string;
  address?: Address;
  addresses?: Address[];
  phone?: string;
  email?: string;
  payment?: PaymentMethod;
  payments?: PaymentMethod[];
  carts?: Cart[];
  activeOrder?: Order;
  savedShops?: Shop[];
  addAddress: (address: Address) => void;
  removeAddress: (address: Address) => void;
  addPayment: (payment: PaymentMethod) => void;
  removePayment: (payment: PaymentMethod) => void;
  addCartItem: (cart: Cart) => void;
  clearCart: (cart: Cart) => void;
  addSavedShop: (shop: Shop) => void;
  removeSavedShop: (shop: Shop) => void;
  isSavedShop: (shop: Shop) => void;
}
