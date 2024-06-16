import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { PaymentMethod } from 'lib_cloud';
import { Box, Divider, PaymentMethodCard, Section, Text } from 'lib_components';

interface PaymentMethodInformationProps {
  paymentMethod?: PaymentMethod;
}
export const PaymentMethodInformation = ({ paymentMethod }: PaymentMethodInformationProps) => {
  const navigation = useNavigation();

  const onPaymentMethodButtonPress = () => {
    //NOTE: PaymentMethodPicker must be added as a modal
    navigation.navigate('PaymentMethodPicker');
  };

  return (
    <Section
      title="Payment Method"
      hasDivider={false}
      actionButtonText={'Change'}
      onButtonActionPress={onPaymentMethodButtonPress}
    >
      {paymentMethod ? (
        <Box padding={'m'}>
          <Box paddingBottom={'m'}>
            <PaymentMethodCard
              paymentMethod={paymentMethod}
              onPaymentMethodPressed={onPaymentMethodButtonPress}
            />
          </Box>
          <Divider />
        </Box>
      ) : (
        <Text>{'Add a payment method to continue'}</Text>
      )}
    </Section>
  );
};
