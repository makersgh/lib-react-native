import { ParseBaseClass } from '../../baseClasses';
import { IPayment as IPaymentMethod } from './types';

export const PAYMENT_METHOD_CLASSNAME = 'PaymentMethod';
export interface PaymentMethod extends IPaymentMethod {}
export class PaymentMethod extends ParseBaseClass {
  constructor(paymentMethod?: PaymentMethod) {
    super(PAYMENT_METHOD_CLASSNAME);
    if (paymentMethod && typeof paymentMethod === 'object') {
      this.fromObject(paymentMethod);
    }
  }
}

export * from './types';
