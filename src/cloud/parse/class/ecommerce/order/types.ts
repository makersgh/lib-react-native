import Parse from 'parse/react-native';
import { Address, CartItem, ICoordinates, PaymentMethod, ShippingMethod, Shop } from '..';
import {} from '.';
import { User } from '../../user';
import { Rider } from '../rider';

export enum ORDER_STATUS { //Maintain order of status, so determine what needs to come after what
  requested = 'requested',
  cancelled = 'cancelled', //by user
  declined = 'declined', //by shop
  refunded = 'refunded',
  created = 'created',
  waitingForPayment = 'waitingForPayment',
  preparing = 'preparing',
  assigned = 'assigned',
  ready = 'ready',
  pickedup = 'pickedup',
  enroute = 'enroute',
  delivered = 'delivered',
  completed = 'completed',
}

export interface IOrder extends Parse.Object {
  objectId: string; //used for creating ORder object from history item
  isBasket: boolean; // whether this order is a basket or not
  cartItems: CartItem[];
  coordinates: ICoordinates;
  origin: Address;
  destination: Address;
  paymentMethod: PaymentMethod;
  shippingMethod: ShippingMethod;
  user: User;
  shop: Shop;
  serviceFee: number;
  total: number;
  notes: string;
  status: string;
  quantity: number;
  shopname: string;
  deliveryFee: number;
  shopnumber: string;
  paid: boolean;
  shopConfirmedPickup: boolean;
  availableForPickup: boolean;
  active: boolean;
  deliveryRoute: ICoordinates[];
  staff: string;
  deliveryDistance: number;
  deliveryDuration: number;
  rider: Rider;
  riderPic: string;
  riderName: string;
  riderServiceFeePercentage: number;
  partnerServiceFeePercentage: number;
  timedout: boolean;
  transactionId: string;
  tax: number;
  tip: number;

  orderNumber: () => object;
  orderNumberText: () => object;
  userphone: () => object;
  username: () => object;
  subTotal: () => object;
}
