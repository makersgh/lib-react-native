import { v4 as uuidv4 } from 'uuid';
import { CloudinaryCred } from './types';
import * as Keychain from 'react-native-keychain';

export const getCloudinaryUploadScript = (
  cloudinaryCred: CloudinaryCred,
  vendorId: string,
  orderId: string
) => `
function uploadImagesToCloudinary(imageUrls) {
  return Promise.all(imageUrls.map(async (imageUrl, index) => {
    const fileName = '${orderId}_' + index
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const file = new File([blob], "cld-sampmichlll99aelss.png", { type: "image/png" });
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', '${cloudinaryCred.uploadPreset}');
    formData.append("public_id", fileName);
    formData.append("api_key", '${cloudinaryCred.apiKey}');
    formData.append('folder', '${vendorId}/${orderId}'); // Specify the folder name


    return fetch('https://api.cloudinary.com/v1_1/${cloudinaryCred.cloudName}/image/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => data.secure_url) // Return the URL of the uploaded image
    .catch(error => console.error('Error uploading image:', error));
  }));
}
`;

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
