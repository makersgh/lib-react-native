import { IShopHours, SHOP_DAYS } from "./types";
import { ShopDay } from "./ShopDay";
import { BaseClass } from "../../baseClasses";

export interface ShopHours extends IShopHours {}
export class ShopHours extends BaseClass {
  constructor(shopHours?: IShopHours) {
    super();
    if (shopHours) {
      this.fromObject(shopHours);
    } else {
      this.Monday = new ShopDay({
        day: SHOP_DAYS.MONDAY,
      });
      this.Tuesday = new ShopDay({
        day: SHOP_DAYS.TUESDAY,
      });
      this.Wednesday = new ShopDay({
        day: SHOP_DAYS.WEDNESDAY,
      });
      this.Thursday = new ShopDay({
        day: SHOP_DAYS.THURSDAY,
      });
      this.Friday = new ShopDay({
        day: SHOP_DAYS.FRIDAY,
      });
      this.Saturday = new ShopDay({
        day: SHOP_DAYS.SATURDAY,
      });
      this.Sunday = new ShopDay({
        day: SHOP_DAYS.SUNDAY,
      });
    }
  }
}
