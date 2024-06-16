import { PAYMENT_METHODS } from 'lib_cloud';

export const paymentImages = {
  momo_mtn: require('./momo_mtn.webp'),
  momo_vodafone: require('./momo_vodafone.webp'),
  momo_airtelTigo: require('./momo_airtelTigo.webp'),
  card_visa: require('./card_visa.webp'),
  card_mastercard: require('./card_mastercard.webp'),
  card_amex: require('./card_amex.webp'),
  paypal: require('./paypal.webp'),
};
export const getPaymentMethodImage = (paymentMethod: PAYMENT_METHODS) => {
  switch (paymentMethod) {
    case PAYMENT_METHODS.MOMO_MTN:
      return paymentImages.momo_mtn;
    case PAYMENT_METHODS.MOMO_VODAFONE:
      return paymentImages.momo_vodafone;
    case PAYMENT_METHODS.MOMO_AIRTELTIGO:
      return paymentImages.momo_airtelTigo;
    case PAYMENT_METHODS.CARD_VISA:
      return paymentImages.card_visa;
    case PAYMENT_METHODS.CARD_MASTERCARD:
      return paymentImages.card_mastercard;
    case PAYMENT_METHODS.CARD_AMEX:
      return paymentImages.card_amex;
    case PAYMENT_METHODS.PAYPAL:
      return paymentImages.paypal;
    default:
      return null;
  }
};

export default paymentImages;
