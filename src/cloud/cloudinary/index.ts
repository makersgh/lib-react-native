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
export const transformImageUrl = (url: string, width?: number, height?: number) => {
  const parts = url.split('/upload/');
  const transformations: string[] = [];

  if (width) {
    transformations.push(`w_${width}`);
  }
  if (height) {
    transformations.push(`h_${height}`);
  }
  if (width || height) {
    transformations.push('c_scale'); // Maintain aspect ratio
  }

  const transformationString = transformations.join(',');
  return `${parts[0]}/upload/${transformationString}/${parts[1]}`;
};
export * from './types';
