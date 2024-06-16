import { PaymentMethod, Transaction } from 'lib_parse_subclass';
import Parse, { User } from 'parse/react-native';

export interface IWallet extends Parse.Object {
  amount: number;
  user: User;
  paymentMethods: PaymentMethod[];
  owner: User;
  balance: number;
  transactions: Transaction[];
}
