import { Wallet } from 'lib_parse_subclass';
import Parse from 'parse/react-native'

export interface ITransaction extends Parse.Object {
  wallet: Wallet;
  amount: number;
  type: string; // e.g., "Credit", "Debit"
  description: string;
}
