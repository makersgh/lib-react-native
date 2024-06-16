import Parse from 'parse/react-native';
import { Address } from '..';

export enum PAYMENT_METHODS {
  MOMO_MTN = 'momo_mtn',
  MOMO_AIRTELTIGO = 'momo_airteltigo',
  MOMO_VODAFONE = 'momo_vodafone',
  CARD_VISA = 'card_visa',
  CARD_DISCOVER = 'card_discover',
  CARD_MASTERCARD = 'card_mastercard',
  CARD_AMEX = 'card_amex',
  BANK_TRANSFER = 'bank_transfer',
  PAYPAL = 'paypal',
  APPLEPAY = 'applepay',
  GOOGLEPAY = 'googlepay',
}

export interface PaymentMethodType {
  id: PAYMENT_METHODS;
  name: string;
  image: string;
}
export interface IPaymentMethod {
  id: PAYMENT_METHODS;
  name: string;
  image: string;
  supportedCountryCodes: [];
  types: PaymentMethodType[];
}

interface IPaymentCard {
  name: string;
  cardNumber: string;
  expireDate: Date;
  cvv: string;
  billingAddress: Address;
}

export interface IPayment extends Parse.Object {
  label?: string;
  method: PAYMENT_METHODS;
  data?: string;
  countryCode?: string;
  phoneNumber?: string;
  paymentCard?: IPaymentCard;
  otpValidated?: boolean;
  active?: boolean;
}
