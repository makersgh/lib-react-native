import Parse from 'parse/react-native';
import { Shop } from '../shop';

export interface IPrintable extends Parse.Object {
  printableId: number;
  title: string;
  brand: string;
  model: string;
  images: string[];
  providerId: number;
  shops: Shop[];
}
