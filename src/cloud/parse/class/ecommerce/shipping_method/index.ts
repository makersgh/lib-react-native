import { ParseBaseClass } from '../../baseClasses';
import { IShippingMethod } from './types';

export const SHIPPING_METHOD_CLASSNAME = 'Shipping';
export interface Shipping extends IShippingMethod {}
export class Shipping extends ParseBaseClass {
  constructor() {
    super(SHIPPING_METHOD_CLASSNAME);
  }
}
