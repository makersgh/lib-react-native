import React from 'react';
import { TextField, List, ListRowItem, Box, Icon, Button, Loading } from 'lib_components';
import { ListRenderItemInfo } from 'react-native';
import { Address } from 'lib_cloud';
import { useAction } from './actions';

interface AddAddressProps {
  onAddressAdded: (address: Address) => void;
  onDismiss: () => void;
}
export const AddAddress = ({ onAddressAdded, onDismiss }: AddAddressProps) => {
  const {
    onUseCurrentLocationPressed,
    onAddressPressed,
    searchAddress,
    addresses,
    loading,
    input,
    setInput,
  } = useAction(onAddressAdded);
  const renderItem = (props: ListRenderItemInfo<Address>) => {
    return (
      <ListRowItem
        key={props.index}
        title={props.item.fullName ?? ''}
        onPress={onAddressPressed(props.item)}
      />
    );
  };

  const renderListHeader = () => {
    return (
      <Box>
        <Box flexDirection={'row'} paddingVertical={'m'}>
          <Button variant={'transparent'} onPress={onDismiss}>
            <Icon name="arrow-left" size={24} />
          </Button>
          <Box flex={1}>
            <TextField
              inputProps={{
                autoFocus: true,
                value: input,
                onChangeText: setInput,
                placeholder: 'Enter Address',
              }}
              leftIcon="map-marker"
            />
            <Button
              label="Use Current Location"
              textAlign={'left'}
              variant={'transparent'}
              onPress={onUseCurrentLocationPressed}
            />
          </Box>
          <Button variant={'transparent'} onPress={searchAddress}>
            <Icon name="search" size={24} />
          </Button>
        </Box>
      </Box>
    );
  };

  return (
    <Box flex={1}>
      {renderListHeader()}
      {loading ? (
        <Loading full />
      ) : (
        <List data={addresses} renderItem={renderItem} contentContainerStyle={{ flex: 1 }} />
      )}
    </Box>
  );
};
