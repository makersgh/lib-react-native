import { Payment, Transaction } from 'lib_parse_subclass';
import Parse, { User } from 'parse/react-native'

export interface IWallet extends Parse.Object {
  amount: number;
  user: User;
  paymentMethods: Payment[];
  owner: User;
  balance: number;
  transactions: Transaction[];
}
