import { IVendor } from "./types"
import { Shop, Staff } from "../..";
import { ParseBaseClass } from "../../baseClasses";

export const VENDOR_CLASSNAME = "Vendor";
export interface Vendor extends IVendor {}
export class Vendor extends ParseBaseClass {
  constructor() {
    super(VENDOR_CLASSNAME);
  }

  addShop(shop: Shop) {
    this.add("shops", shop);
  }
  addStaff(staff: Staff) {
    this.add("staff", staff);
  }
}
