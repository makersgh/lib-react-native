import { ITransaction } from "./types"
import { ParseBaseClass } from "../../baseClasses";

export const TRANSACTION_CLASSNAME = "Transaction";
export interface Transaction extends ITransaction {}
export class Transaction extends ParseBaseClass {
  constructor() {
    super(TRANSACTION_CLASSNAME);
  }
}
