import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Box, Card, Divider, Section, Text, Touchable } from 'lib_components';
import { ShippingMethod } from 'lib_cloud';

interface ShippingMethodInformationProps {
  shippingMethod?: ShippingMethod;
}
export const ShippingMethodInformation = ({ shippingMethod }: ShippingMethodInformationProps) => {
  const navigation = useNavigation();

  const onShippingMethodButtonPress = () => {
    //NOTE: ShippingMethodPicker must be added as a modal
    navigation.navigate('ShippingMethodPicker');
  };

  return (
    <Section
      title="Shipping Method"
      hasDivider={false}
      onButtonActionPress={onShippingMethodButtonPress}
      actionButtonText={'Change'}
    >
      <Touchable onPress={onShippingMethodButtonPress}>
        <Box padding={'m'}>
          <Box paddingBottom={'m'}>
            {shippingMethod ? (
              <Text fontWeight={'bold'}>{shippingMethod.name}</Text>
            ) : (
              <Text>{'Add a shipping method to continue'}</Text>
            )}
          </Box>
          <Divider />
        </Box>
      </Touchable>
    </Section>
  );
};
