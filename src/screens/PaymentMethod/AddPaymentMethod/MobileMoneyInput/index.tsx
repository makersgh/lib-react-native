import React from 'react';
import PhoneInput from 'react-native-phone-number-input';
import { styles } from './styles';
import { theme } from 'lib_theme';
import { useAction } from './actions';
import { PAYMENT_METHODS, PaymentMethod } from 'lib_cloud';
import { Box, Button } from 'lib_components';
import { SUBMIT_TEXT } from './constants';

export interface MobileMoneyInputProps {
  method: PAYMENT_METHODS;
  paymentMethod?: PaymentMethod;
  onPaymentMethodAdded?: (paymentMethod: PaymentMethod) => void;
}

const MobileMoneyInput = ({
  onPaymentMethodAdded,
  paymentMethod,
  method,
}: MobileMoneyInputProps) => {
  const { phoneInput, phoneNumber, setPhoneNumber, submitPayment } = useAction({
    method,
    onPaymentMethodAdded,
    paymentMethod,
  });
  return (
    <Box flex={1}>
      <Box flex={1}>
        <PhoneInput
          defaultValue={phoneNumber}
          ref={phoneInput}
          key={'countryPicker-US'}
          containerStyle={{ backgroundColor: theme.colors.background, width: '100%' }}
          // textContainerStyle={[{ backgroundColor: theme.colors.background }]}
          // textInputStyle={[{ color: theme.colors.secondary }, styles.phoneNumber]}
          defaultCode="GH"
          onChangeFormattedText={setPhoneNumber}
          countryPickerProps={{
            countryCodes: ['GH'],
          }}
          disableArrowIcon
          textInputProps={{
            keyboardType: `phone-pad`,
          }}
          // onChangeFormattedText={(text) => {
          //   setPhoneNumber(text);
          //   onMoMoDetailsChange({ phoneNumber: text, provider });
          // }}
        />
      </Box>
      <Button label={SUBMIT_TEXT} onPress={submitPayment} />
    </Box>
  );
};

export default MobileMoneyInput;
