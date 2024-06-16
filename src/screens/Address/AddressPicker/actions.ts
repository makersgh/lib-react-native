import { useState } from 'react';
import { Address } from 'lib_cloud';
import { AddressPickerProps } from '.';

export const useAction = ({ savedAddresses, onAddressSelected }: AddressPickerProps) => {
  const [displayedAddresses, setDisplayedAddresses] = useState(savedAddresses ?? []);
  const [editing, setEditing] = useState(false);

  const onAddAddressPressed = () => {
    setEditing(true);
  };
  const onAddressAdded = (address: Address) => {
    setEditing(false);
    setDisplayedAddresses([...displayedAddresses, address]);
  };
  const onDismissEditing = () => {
    setEditing(false);
  };
  return {
    onAddAddressPressed,
    onAddressAdded,
    onDismissEditing,
    savedAddresses,
    displayedAddresses,
    editing,
  };
};
