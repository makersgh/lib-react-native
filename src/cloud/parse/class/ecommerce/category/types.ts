import Parse from 'parse/react-native'
import { Category } from '.';

export interface ICategory extends Parse.Object {
  name?: string;
  image?: string;
  level?: number;
  subLevel?: Category[];
}
