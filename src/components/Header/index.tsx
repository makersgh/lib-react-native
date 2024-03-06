import React from 'react';
import { Appbar } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { Text } from 'lib_components';
import styles from './styles';

interface HeaderProps {
  title: string;
  onBackPress?: () => void;
  showBackButton?: boolean;
  actions?: {
    icon: IconSource;
    onPress?: () => void;
  }[];
}
export const Header = ({ title, onBackPress, showBackButton, actions }: HeaderProps) => {
  return (
    <Appbar.Header elevated style={styles.container}>
      {showBackButton && <Appbar.BackAction onPress={onBackPress} />}
      <Appbar.Content title={<Text heading2>{title}</Text>} />
      {actions?.map(({ icon, onPress }, index) => (
        <Appbar.Action key={index} icon={icon} onPress={onPress} />
      ))}
    </Appbar.Header>
  );
};
