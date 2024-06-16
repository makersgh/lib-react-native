import React, { useState } from 'react';
import { Box, Text, Section, Divider, Image, RadioButton, Icon } from 'lib_components';
import { useNavigation } from '@react-navigation/native';
import { RadioOption } from 'src/components/RadioButton/RadioButton.type';
import { theme } from 'lib_theme';
import { Address, ShippingMethod } from 'lib_cloud';
import { TouchableOpacity } from 'react-native';
import { ShippingMethodInformation } from 'lib_screens';

interface AddressInformationProps {
  address?: Address;
  shippingMethod?: ShippingMethod;
}
export const AddressInformation = ({ address, shippingMethod }: AddressInformationProps) => {
  const navigation = useNavigation();
  const [deliveryOrPickup, setDeliveryOrPickup] = useState<'delivery' | 'pickup'>('delivery');

  const onChangeAddressButtonPress = () => {
    //NOTE: AddressPicker must be added as a modal
    navigation.navigate('AddressPicker');
  };

  const onDeliveryOrPickupPressed = (option: RadioOption) => {
    setDeliveryOrPickup(option.value as any);
  };

  return (
    <>
      <Section
        title={deliveryOrPickup === 'delivery' ? 'Deliver to' : 'Pickup'}
        actionButtonText={deliveryOrPickup === 'delivery' ? 'Change' : ''}
        hasDivider={false}
        onButtonActionPress={onChangeAddressButtonPress}
      >
        <Box paddingHorizontal={'m'}>
          <RadioButton
            data={[
              {
                label: 'Delivery',
                value: 'delivery',
              },
              {
                label: 'Pickup',
                value: 'pickup',
              },
            ]}
            defaultValue={deliveryOrPickup}
            onItemPress={onDeliveryOrPickupPressed}
          />
        </Box>
        {deliveryOrPickup === 'delivery' && (
          <>
            <Box backgroundColor="card" padding="m">
              <TouchableOpacity onPress={onChangeAddressButtonPress}>
                <Box flexDirection="row">
                  <Box marginRight="m">
                    <Icon name="map" size={24} color={theme.colors.primary} />
                  </Box>
                  <Box flex={1}>
                    <Text fontWeight="bold" marginBottom="s">
                      {address?.fullName}
                    </Text>
                  </Box>
                </Box>
              </TouchableOpacity>
              <Divider />
            </Box>
            <ShippingMethodInformation shippingMethod={shippingMethod} />
          </>
        )}
      </Section>
    </>
  );
};
