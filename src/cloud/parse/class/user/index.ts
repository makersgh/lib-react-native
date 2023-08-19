import Parse from 'parse/react-native'
import { ParseUserBaseClass } from "../baseClasses";
import { IUser } from "./types";

export const USER_CLASSNAME = Parse.User.className;

export interface User extends IUser { }
export class User extends ParseUserBaseClass { }
