import React from 'react';
import { List, Box, Divider, Text, Touchable, ShippingMethodCard } from 'lib_components';
import { ListRenderItemInfo } from 'react-native';
import { ShippingMethod } from 'lib_cloud';

export interface ShippingMethodPickerProps {
  savedShippingMethods?: ShippingMethod[];
  onShippingMethodSelected?: (shippingMethod: ShippingMethod) => void;
}
export const ShippingMethodPicker = ({
  savedShippingMethods,
  onShippingMethodSelected,
}: ShippingMethodPickerProps) => {
  const renderItem = ({ item }: ListRenderItemInfo<ShippingMethod>) => {
    return (
      <ShippingMethodCard
        shippingMethod={item}
        onShippingMethodPressed={onShippingMethodSelected}
      />
    );
  };
  return (
    <Box flex={1} padding={'s'} backgroundColor={'white'}>
      <Box flex={1}>
        <List
          data={savedShippingMethods}
          contentContainerStyle={{ flex: 1 }}
          renderItem={renderItem}
        />
      </Box>
    </Box>
  );
};
