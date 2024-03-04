import { ParseBaseClass } from '../../baseClasses';
import {IPrintable} from './types';

export const PRINTABLE_CLASSNAME = 'Printable';
export interface Printable extends IPrintable {}
export class Printable extends ParseBaseClass {
  constructor() {
    super(PRINTABLE_CLASSNAME);
  }
}
