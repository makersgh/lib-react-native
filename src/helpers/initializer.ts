import Config from 'react-native-config';
import * as Keychain from 'react-native-keychain';
import { logError } from './logger';

export const initialCredentials = async () => {
  const config = (Config as any).getConstants?.();
  await Keychain.setGenericPassword('apiKeys', JSON.stringify(config)).catch(
    logError,
  );
};
