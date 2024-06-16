import { ParseBaseClass } from '../class/baseClasses';
import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keychain from 'react-native-keychain';

export interface IParseServerAPICred {
  serverURL: string;
  appId: string;
  javascriptKey: string;
  masterKey?: string;
}

export interface SubClass {
  className: string;
  class: ParseBaseClass;
}

class ParseInitialize {
  initialized = false;
  constructor(config: IParseServerAPICred, subClasses?: SubClass[]) {
    this.initialize(config, subClasses);
  }
  protected initialize(config: IParseServerAPICred, subClasses?: SubClass[]) {
    if (subClasses) {
      this.registerParseSubClasses(subClasses);
    }
    Parse.serverURL = config.serverURL;
    Parse.initialize(config.appId, config.javascriptKey, config.masterKey);

    this.initialized = true;
  }
  registerParseSubClasses(subClasses: SubClass[]) {
    subClasses.forEach((subClass) =>
      Parse.Object.registerSubclass(subClass.className, subClass.class)
    );
  }
}

export class ParseInitializeRN extends ParseInitialize {
  protected initialize(config: IParseServerAPICred, subClasses?: SubClass[]) {
    //allow objects from the parse server to be cached locally
    //React Native
    // const {AsyncStorage} = require('@react-native-async-storage/async-storage');
    super.initialize(config, subClasses);
    Parse.setAsyncStorage(AsyncStorage);
    Parse.enableLocalDatastore();
  }
}

export class ParseInitializeNode extends ParseInitialize {
  protected initialize(config: IParseServerAPICred, subClasses?: SubClass[]) {
    super.initialize(config, subClasses);
  }
}

export const getParseServerCredentials = async (): Promise<IParseServerAPICred | undefined> => {
  const credentials = await Keychain.getGenericPassword();
  let parseCred: IParseServerAPICred = {
    serverURL: '',
    appId: '',
    javascriptKey: '',
  };
  if (credentials) {
    const apiKeys = JSON.parse(credentials.password);
    console.log(apiKeys);
    parseCred = {
      serverURL: apiKeys.PARSE_SERVER_URL,
      appId: apiKeys.PARSE_APP_ID,
      javascriptKey: apiKeys.PARSE_JAVASCRIPT_KEY,
      masterKey: apiKeys.PARSE_MASTER_KEY,
    };
  }
  return parseCred;
};
