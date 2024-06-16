import React from 'react';
import {
  List,
  ListRowItem,
  Box,
  Button,
  Text,
  Touchable,
  Image,
  PaymentMethodCard,
  Divider,
} from 'lib_components';
import { ListRenderItemInfo } from 'react-native';
import { AddPaymentMethod } from '../AddPaymentMethod';
import { useAction } from './actions';
import { PaymentMethod } from 'lib_cloud';
import { getPaymentMethodImage } from 'lib_assets';

export interface PaymentMethodPickerProps {
  savedPaymentMethods?: PaymentMethod[];
  onPaymentMethodSelected?: (paymentMethod: PaymentMethod) => void;
}
export const PaymentMethodPicker = ({
  savedPaymentMethods,
  onPaymentMethodSelected,
}: PaymentMethodPickerProps) => {
  const {
    onAddPaymentMethodPressed,
    onPaymentMethodAdded,
    onDismissEditing,
    displayedPaymentMethods,
    editing,
  } = useAction({
    savedPaymentMethods,
    onPaymentMethodSelected,
  });

  const renderItem = ({ item }: ListRenderItemInfo<PaymentMethod>) => {
    return (
      <Box>
        <PaymentMethodCard paymentMethod={item} onPaymentMethodPressed={onPaymentMethodSelected} />
        <Divider />
      </Box>
    );
  };
  return (
    <Box flex={1} padding={'s'} backgroundColor={'white'}>
      {!editing ? (
        <Box flex={1}>
          <List
            data={displayedPaymentMethods}
            contentContainerStyle={{ flex: 1 }}
            renderItem={renderItem}
          />
          <Button margin={'m'} label="Add Payment Method" onPress={onAddPaymentMethodPressed} />
        </Box>
      ) : (
        <AddPaymentMethod
          onPaymentMethodAdded={onPaymentMethodAdded}
          onDismiss={onDismissEditing}
        />
      )}
    </Box>
  );
};
