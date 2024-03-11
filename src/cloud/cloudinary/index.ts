import { CloudinaryCred } from './types';
import * as Keychain from 'react-native-keychain';

export const getCloudinaryCred = async () => {
  const credentials = await Keychain.getGenericPassword();
  let cloudinaryCred: CloudinaryCred = {
    apiKey: '',
    cloudName: '',
    uploadPreset: '',
  };
  if (credentials) {
    const apiKeys = JSON.parse(credentials.password);
    cloudinaryCred = {
      apiKey: apiKeys.CLOUDINARY_API_KEY,
      cloudName: apiKeys.CLOUDINARY_CLOUD_NAME,
      uploadPreset: apiKeys.CLOUDINARY_UPLOAD_PRESET,
    };
  }
  return cloudinaryCred;
};

export * from './types';
