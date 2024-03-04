export * from './wallet';
export * from './shop';
export * from './staff';
export * from './menuitem';
export * from './cart';
export * from './order';
export * from './payment';
export * from './vendor';
export * from './product';
export * from './wallet';
export * from './transaction'
export * from './address'
export * from './category'
export * from './printable'
export * from './'
// export * from "./review";
// export * from "./customer";
// export * from "./rider";

import { SubClass } from '../../initialize';
import { ADDRESS_CLASSNAME, Address } from './address';
import { CART_CLASSNAME, Cart } from './cart';
import { ORDER_CLASSNAME, Order } from './order';
import { PAYMENT_CLASSNAME, Payment } from './payment';
import { PRODUCT_CLASSNAME, Product } from './product';
import { SHOP_CLASSNAME, Shop } from './shop';
import { TRANSACTION_CLASSNAME, Transaction } from './transaction';
import { VENDOR_CLASSNAME, Vendor } from './vendor';
import { WALLET_CLASSNAME, Wallet } from './wallet';



export const EcommerceSubClasses: SubClass[] = [
  {
    className: SHOP_CLASSNAME,
    class: Shop as any,
  },
  {
    className: ORDER_CLASSNAME,
    class: Order as any,
  },
  {
    className: VENDOR_CLASSNAME,
    class: Vendor as any,
  },
  {
    className: PRODUCT_CLASSNAME,
    class: Product as any,
  },
  {
    className: WALLET_CLASSNAME,
    class: Wallet as any,
  },
  {
    className: CART_CLASSNAME,
    class: Cart as any,
  },
  {
    className: PAYMENT_CLASSNAME,
    class: Payment as any,
  },
  {
    className: TRANSACTION_CLASSNAME,
    class: Transaction as any,
  },

  {
    className: ADDRESS_CLASSNAME,
    class: Address as any,
  },
];
