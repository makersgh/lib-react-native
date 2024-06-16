import { IPayment, PAYMENT_METHODS } from 'lib_cloud';

export const paymentList: IPayment[] = [
  {
    method: PAYMENT_METHODS.MOMO_MTN,
    phoneNumber: '+233593870598',
    otpValidated: false,
    countryCode: '233',
    active: false,
  },
  {
    method: PAYMENT_METHODS.MOMO_MTN,
    phoneNumber: '+233203836463',
    otpValidated: true,
    countryCode: '233',
    active: true,
  },
];
