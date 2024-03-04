import Parse from 'parse/react-native';

export interface IProduct extends Parse.Object {
  price: number;
  inventory: number;
  available: boolean;
  name: string;
  description?: string;
  images?: string[];
  tags?: string[];
  rating?: number;
}
