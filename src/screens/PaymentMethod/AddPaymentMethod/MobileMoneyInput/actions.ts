import { useCallback, useRef, useState } from 'react';
import { PHONENUMBER_SAMPLE } from './constants';
import { displayMsg } from 'lib_helpers';
import { MobileMoneyInputProps } from '.';
import { IPaymentMethod, PaymentMethod } from 'lib_cloud';

export const useAction = ({ onPaymentMethodAdded, onDismiss, method }: MobileMoneyInputProps) => {
  const [phoneNumber, setPhoneNumber] = useState();
  const phoneInput = useRef(null);

  const submitPayment = useCallback(async () => {
    if (!phoneNumber) {
      displayMsg('Enter a valid phone number to continue.');
      return;
    } else {
      const checkValid = phoneInput.current?.isValidNumber(phoneNumber);

      if (!checkValid) {
        displayMsg(`Please add a valid phone number, (${PHONENUMBER_SAMPLE})`);
        return;
      }
    }
    const payment = new PaymentMethod({
      method,
      phoneNumber,
    } as any);
    onPaymentMethodAdded?.(payment);
  }, [phoneNumber]);

  return {
    phoneInput,
    phoneNumber,
    setPhoneNumber,
    submitPayment,
  };
};
