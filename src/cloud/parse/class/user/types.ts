import Parse from 'parse/react-native';
import { Address, Order, PaymentMethod } from '../ecommerce';
export interface IUser extends Parse.User {
  username: string;
  email: string;
  fullname: string;
  phone: string;
  password: string;
  emailVerified: boolean;
  addresses: Address[];
  preferredAddress: Address;
  paymentMethods: PaymentMethod[];
  preferredPaymentMethod: PaymentMethod;
  basket: Order;
}
