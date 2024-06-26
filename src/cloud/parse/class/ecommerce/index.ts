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
export * from './transaction';
export * from './address';
export * from './category';
export * from './shipping_method';
export * from './';
// export * from "./review";
// export * from "./customer";
// export * from "./rider";

import { SubClass } from '../../initialize';
import { ADDRESS_CLASSNAME, Address } from './address';
import { CART_CLASSNAME, Cart } from './cart';
import { CATEGORY_CLASSNAME, Category } from './category';
import { ORDER_CLASSNAME, Order } from './order';
import { PAYMENT_METHOD_CLASSNAME, PaymentMethod } from './payment';
import { PRODUCT_CLASSNAME, Product } from './product';
import { ShippingMethod, SHIPPING_METHOD_CLASSNAME } from './shipping_method';
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
    className: CATEGORY_CLASSNAME,
    class: Category as any,
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
    className: PAYMENT_METHOD_CLASSNAME,
    class: PaymentMethod as any,
  },
  {
    className: TRANSACTION_CLASSNAME,
    class: Transaction as any,
  },

  {
    className: ADDRESS_CLASSNAME,
    class: Address as any,
  },

  {
    className: SHIPPING_METHOD_CLASSNAME,
    class: ShippingMethod as any,
  },
];
