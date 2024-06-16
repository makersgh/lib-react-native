import { PAYMENT_METHODS } from 'lib_cloud';
import { useState } from 'react';

export const paymentOptions = [
  { id: PAYMENT_METHODS.MOMO_MTN, label: 'MTN MoMo', image: 'path/to/mtn_momo_image.png' },
  {
    id: PAYMENT_METHODS.MOMO_AIRTELTIGO,
    label: 'AirtelTigo MoMo',
    image: 'path/to/airteltigo_momo_image.png',
  },
  {
    id: PAYMENT_METHODS.MOMO_VODAFONE,
    label: 'Vodafone MoMo',
    image: 'path/to/vodafone_momo_image.png',
  },
  { id: PAYMENT_METHODS.CARD_VISA, label: 'Visa Card', image: 'path/to/visa_card_image.png' },
  {
    id: PAYMENT_METHODS.CARD_MASTERCARD,
    label: 'MasterCard',
    image: 'path/to/mastercard_image.png',
  },
  { id: PAYMENT_METHODS.PAYPAL, label: 'PayPal', image: 'path/to/paypal_image.png' },
  // Add other payment methods as needed
];

export const useAction = () => {
  const [selectedMethod, setSelectedMethod] = useState<PAYMENT_METHODS>();
  const [paymentDetails, setPaymentDetails] = useState({});

  const handlePaymentDetailsChange = (details) => {
    // Handle changes in payment details
    // You can set these details to state or directly prepare for submission
  };
  return { selectedMethod, setSelectedMethod, handlePaymentDetailsChange, paymentOptions };
};
