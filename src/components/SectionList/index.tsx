import {
    SectionList as RNSectionList,
    SectionListProps as RNSectionListProps,
  } from 'react-native';
  import { Divider } from '../Divider';
  import React from 'react';
  import { useScrollToTop } from '@react-navigation/native';
  import { Text } from '../Text';
  import { Box } from '../Box';
  import { useAppTheme } from 'lib_theme';
  
  export function SectionList<T>({
    contentContainerStyle,
    ...rest
  }: RNSectionListProps<T>) {
    const { colors } = useAppTheme();
    const ref = React.useRef(null);
    useScrollToTop(ref);
  
    const renderDivider = () => {
      return <Divider />;
    };
  
    return (
      <RNSectionList
        ref={ref}
        ItemSeparatorComponent={renderDivider}
        ListEmptyComponent={
          <Box flex={1} justifyContent="center" alignItems="center">
            <Text variant="secondary">No data</Text>
          </Box>
        }
        style={{ backgroundColor: colors.background }}
        contentContainerStyle={[
          {
            backgroundColor: colors.card,
          },
          contentContainerStyle,
        ]}
        {...rest}
      />
    );
  }
  