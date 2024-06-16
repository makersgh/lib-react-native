import React from 'react';
import { List, ListRowItem, Box, Button } from 'lib_components';
import { ListRenderItemInfo } from 'react-native';
import { AddAddress } from '../AddAddress';
import { useAction } from './actions';
import { Address } from 'lib_cloud';

export interface AddressPickerProps {
  savedAddresses?: Address[];
  onAddressSelected?: (address: Address) => void;
}
export const AddressPicker = ({ savedAddresses, onAddressSelected }: AddressPickerProps) => {
  const { onAddAddressPressed, onAddressAdded, onDismissEditing, displayedAddresses, editing } =
    useAction({
      savedAddresses,
      onAddressSelected,
    });

  const renderItem = ({ item, index }: ListRenderItemInfo<Address>) => {
    return (
      <ListRowItem
        key={index}
        title={item.fullName ?? ''}
        onPress={() => onAddressSelected?.(item)}
      />
    );
  };
  return (
    <Box flex={1} padding={'s'} backgroundColor={'white'}>
      {!editing ? (
        <Box flex={1}>
          <List
            data={displayedAddresses}
            contentContainerStyle={{ flex: 1 }}
            renderItem={renderItem}
          />
          <Box margin={'m'}>
            <Button label="Add Address" onPress={onAddAddressPressed} />
          </Box>
        </Box>
      ) : (
        <AddAddress onAddressAdded={onAddressAdded} onDismiss={onDismissEditing} />
      )}
    </Box>
  );
};
