import { SubClass } from '../initialize';
import { BibleSubClasses } from './bible';
import { EcommerceSubClasses } from './ecommerce';
export * from './baseClasses'

export * from './user';
export * from './ecommerce';
export * from './bible';
export * from './parseFunctions'
export const SubClasses: SubClass[] = [
  ...BibleSubClasses,
  ...EcommerceSubClasses
];
