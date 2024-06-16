import React, { useCallback } from 'react';
import { Box, Icon, Button, Image, Text } from 'lib_components';
import { TouchableOpacity } from 'react-native';
import { PAYMENT_METHODS, PaymentMethod } from 'lib_cloud';
import { useAction } from './actions';
import MobileMoneyInput from './MobileMoneyInput'; // Adjust the import path as needed
import CreditCardInput from './CreditCardInput'; // Adjust the import path as needed

interface AddPaymentMethodProps {
  onPaymentMethodAdded: (address: PaymentMethod) => void;
  onDismiss: () => void;
}
export const AddPaymentMethod = ({ onPaymentMethodAdded, onDismiss }: AddPaymentMethodProps) => {
  const { selectedMethod, setSelectedMethod, paymentOptions, handlePaymentDetailsChange } =
    useAction();

  const renderPaymentDetailsInput = useCallback(() => {
    switch (selectedMethod) {
      case PAYMENT_METHODS.MOMO_MTN:
      case PAYMENT_METHODS.MOMO_AIRTELTIGO:
      case PAYMENT_METHODS.MOMO_VODAFONE:
        return (
          <MobileMoneyInput method={selectedMethod} onPaymentMethodAdded={onPaymentMethodAdded} />
        );
      case PAYMENT_METHODS.CARD_VISA:
      case PAYMENT_METHODS.CARD_DISCOVER:
      case PAYMENT_METHODS.CARD_MASTERCARD:
        return <CreditCardInput onCardDetailsChange={handlePaymentDetailsChange} />;
      case PAYMENT_METHODS.BANK_TRANSFER:
      // return <BankTransferInput onBankDetailsChange={handlePaymentDetailsChange} />;
      // Add cases for other payment methods like PayPal, ApplePay, GooglePay
      default:
        return null;
    }
  }, [selectedMethod]);

  const renderMobileMoneyInput = () => {
    // Render input fields for mobile money
  };

  const renderCardInput = () => {
    // Render input fields for card
  };

  const renderBankTransferInput = () => {
    // Render input fields for bank transfer
  };
  const renderPaymentMethodOptions = () => {
    return paymentOptions.map((option) => (
      <TouchableOpacity key={option.id} onPress={() => setSelectedMethod(option.id)}>
        <Box flexDirection="row" padding="m">
          <Box marginRight="m">
            <Image source={option.image} style={{ width: 24, height: 24 }} />
          </Box>
          <Box flex={1}>
            <Text fontWeight="bold" marginBottom="s">
              {option.label}
            </Text>
          </Box>
        </Box>
      </TouchableOpacity>
    ));
  };
  return (
    <Box flex={1}>
      <Box flexDirection={'row'} paddingVertical={'m'}>
        <Button variant={'transparent'} onPress={onDismiss}>
          <Icon name="arrow-left" size={24} />
        </Button>
      </Box>

      {!selectedMethod ? renderPaymentMethodOptions() : renderPaymentDetailsInput()}
    </Box>
  );
};
