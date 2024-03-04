import { ParseBaseClass } from '../../baseClasses';
import { IProduct } from './types';

export const PRODUCT_CLASSNAME = 'Product';

export interface Product extends IProduct {}
export class Product extends ParseBaseClass {
  constructor() {
    super(PRODUCT_CLASSNAME);
  }
}
