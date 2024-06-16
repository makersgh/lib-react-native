import { useState } from 'react';
import { PaymentMethod } from 'lib_cloud';
import { PaymentMethodPickerProps } from '.';

export const useAction = ({
  onPaymentMethodSelected,
  savedPaymentMethods,
}: PaymentMethodPickerProps) => {
  const [displayedPaymentMethods, setDisplayedPaymentMethods] = useState(savedPaymentMethods ?? []);
  const [editing, setEditing] = useState(false);

  const onAddPaymentMethodPressed = () => {
    setEditing(true);
  };
  const onPaymentMethodAdded = (paymentMethod: PaymentMethod) => {
    setEditing(false);
    setDisplayedPaymentMethods([...displayedPaymentMethods, paymentMethod]);
  };
  const onDismissEditing = () => {
    setEditing(false);
  };
  return {
    onAddPaymentMethodPressed,
    onPaymentMethodAdded,
    onDismissEditing,
    displayedPaymentMethods,
    editing,
  };
};
