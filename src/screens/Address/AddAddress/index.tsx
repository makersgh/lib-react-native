import React from 'react';
import { TextField, List, Divider, ListRowItemProps, ListRowItem, Box } from 'lib_components';
import { ListRenderItemInfo } from 'react-native';
import { Address } from 'lib_cloud';

interface AddAddressProps {
  savedAddresses: Address[];
}
export const AddAddress = ({ savedAddresses }: AddAddressProps) => {
  const prepareListData = (addresses: Address[]) => {
    return addresses.map((item) => {
      const { id, fullName, name } = item;
      return {
        id,
        title: name,
        subTitle: fullName,
      };
    });
  };

  const renderItem = (props: ListRenderItemInfo<ListRowItemProps>) => {
    return <ListRowItem key={props.index} {...props.item} />;
  };

  const renderListHeader = () => {
    return (
      <>
        <Box paddingVertical="s" paddingHorizontal="m">
          <TextField
            inputProps={{
              placeholder: 'Enter Address',
            }}
            leftIcon="location"
          />
        </Box>
        <Divider marginVertical="s" />
      </>
    );
  };

  return (
    <List
      data={prepareListData(savedAddresses)}
      ListHeaderComponent={renderListHeader()}
      renderItem={renderItem}
    />
  );
};
