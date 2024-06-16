import { ParseBaseClass } from '../../baseClasses';
import { IShippingMethod } from './types';

export const SHIPPING_METHOD_CLASSNAME = 'Shipping';
export interface ShippingMethod extends IShippingMethod {}
export class ShippingMethod extends ParseBaseClass {
  constructor() {
    super(SHIPPING_METHOD_CLASSNAME);
  }
}
