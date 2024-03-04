import { ParseBaseClass } from '../../baseClasses';
import { IStaff } from './types';

export const STAFF_CLASSNAME = 'Staff';
export interface Staff extends IStaff {}
export class Staff extends ParseBaseClass {
  constructor() {
    super(STAFF_CLASSNAME);
  }
}
