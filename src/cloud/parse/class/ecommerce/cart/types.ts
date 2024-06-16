import Parse from 'parse/react-native';
import { CartItem } from '.';
import { Address, PaymentMethod, Product, Shop } from '../..';
import { MenuItem, MenuOption } from '../menuitem';

export interface ICart extends Parse.Object {
  shop: Shop;
  cartItems: CartItem[];
  destinationAddress: Address;
  payment: PaymentMethod;
  notes: string;

  addCartItem: (cartItem: CartItem) => void;
  removeCartItem: (cartItem: CartItem) => void;
  updateCartItem: (cartItem: CartItem, newCartItem: CartItem) => void;
  setDestinationAddress: (address: Address) => void;
  setPayment: (payment: PaymentMethod) => void;
  getCartItem: (itemId: string) => void;
  setNotes: (notes: string) => void;
  total: () => number;

  shopId: () => string;
  shopName: () => string;
  count: () => number;
  originAddress: () => Address;
}

export interface ICartItem extends Parse.Object {
  id: string;
  product: Product;
  quantity: number;
  notes: string;
  price: number;
  previewImageUrls: string[];
  name: string;
  setQuantity: (quantity: number) => void;
  addOption: (option: MenuOption) => void;
  requiredOptionAdded: () => boolean;
  optionTotal: () => number;
  optionText: () => string;
  getPrice: () => number;
  total: () => number;
}
