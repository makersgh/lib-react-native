import React from 'react';

import { Box, Text, Touchable } from 'lib_components';
import { ShippingMethod } from 'lib_parse_subclass';

interface ShippingMethodCardProps {
  shippingMethod: ShippingMethod;
  onShippingMethodPressed?: (shippingMethod: ShippingMethod) => void;
}

export const ShippingMethodCard: React.FC<ShippingMethodCardProps> = ({
  shippingMethod,
  onShippingMethodPressed,
}: ShippingMethodCardProps) => (
  <Touchable onPress={() => onShippingMethodPressed?.(shippingMethod)}>
    <Box padding={'m'} flexDirection={'row'} justifyContent={'space-between'}>
      <Text> {shippingMethod.name}</Text>
      <Text> {shippingMethod.price} GHS</Text>
    </Box>
  </Touchable>
);
