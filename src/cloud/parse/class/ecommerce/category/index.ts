import { ICategory } from './types';
import { ParseBaseClass } from '../../baseClasses';
export const CATEGORY_CLASSNAME = "Category";
export interface Category extends ICategory { }
export class Category extends ParseBaseClass {
  constructor() {
    super(CATEGORY_CLASSNAME);
  }
}
export * from './types'