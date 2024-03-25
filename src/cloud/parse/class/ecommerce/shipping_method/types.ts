import Parse from 'parse/react-native';
import { Shop } from '../shop';

export interface IShippingMethod extends Parse.Object {
  name: string;
  price: number;
  estimatedDeliveryTime: string;
  supportedShops: Shop[];
  imageUrl: string;
}
