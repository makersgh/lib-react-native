import React from 'react';
import { Box, Section, Divider, Icon, ListRowItem } from 'lib_components';
import { ScrollView } from 'react-native-gesture-handler';
import { Address } from 'lib_cloud';

interface SavedAddressesProps {
  savedAddresses: Address[];
}
export const SavedAddresses = ({ savedAddresses }: SavedAddressesProps) => {
  const addAddressItemPress = () => {
    // navigation.navigate('AddAddress');
  };

  return (
    <ScrollView>
      <Section title="Favorites" hasDivider={false}>
        <Box>
          {savedAddresses.map((item, index) => {
            const { id, name, fullName } = item;

            return (
              <Box key={index}>
                <ListRowItem id={id} title={name ?? ''} subTitle={fullName} />
                <Divider />
              </Box>
            );
          })}
          <ListRowItem
            title="Add an Address"
            subTitle="Save your favourite places"
            onPress={addAddressItemPress}
          />
        </Box>
      </Section>
    </ScrollView>
  );
};
