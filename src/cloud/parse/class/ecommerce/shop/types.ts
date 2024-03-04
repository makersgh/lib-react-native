import Parse from 'parse/react-native'

import { ICoordinates } from "../address/types";
import { ShopDay } from "./ShopDay";
import { ShopHours } from "./ShopHours";
import { Address } from '../address';
import { MenuItem } from '../menuitem';
import { Promo } from '../promo';
import { Review } from '../review';
import { Staff } from '../staff';
  
  export enum SHOP_DAYS {
    MONDAY = "Monday",
    TUESDAY = "Tuesday",
    WEDNESDAY = "Wednesday",
    THURSDAY = "Thursday",
    FRIDAY = "Friday",
    SATURDAY = "Saturday",
    SUNDAY = "Sunday",
  }
  export interface IShopDay {
    day: SHOP_DAYS;
    opened?: boolean;
    openTime?: Date;
    closeTime?: Date;
  }
  export interface IShopHours {
    Monday: ShopDay;
    Tuesday: ShopDay;
    Wednesday: ShopDay;
    Thursday: ShopDay;
    Friday: ShopDay;
    Saturday: ShopDay;
    Sunday: ShopDay;
  }
  export interface IShopCategory {
    name: string;
    imageUrl?: string;
    relatedCategories?: IShopCategory[];
  }
  export interface IShop extends Parse.Object {
    name: string;
    description: string;
    phone: string;
    image: string;
    menu: MenuItem[];
    menuCategories: IShopCategory[];
    category: string;
    availability: IShopHours;
    shopHours: ShopHours;
    address: Address;
    coordinates: ICoordinates;
    active: boolean;
    isReady: boolean;
    staff: Staff[];
    owner: Partner;
    review: Review;
    rating: number;
    tags: string[];
    opened: boolean;
    promos: Promo[];
    addMenu: (menuItem: MenuItem) => void;
    removeMenu: (menuItem: MenuItem) => void;
    addTag: (tag: string) => void;
    removeTag: (tag: string) => void;
    addCategory: (menuCategory: string) => void;
    removeCategory: (menuCategories: string) => void;
    addStaff: (staff: Staff) => void;
    getSectionedMenu: () => void;
    milesTo: (coordinates: ICoordinates) => void;
  }
  