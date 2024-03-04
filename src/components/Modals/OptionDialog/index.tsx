import React, { useState } from 'react';
import { Button, Dialog, Portal, TextInput, List } from 'react-native-paper';
import styles from './styles';
import { Container } from 'lib_components';

const OptionDialog = ({ visible, onDismiss, onSelectOption }) => {
  const [customOption, setCustomOption] = useState('');
  const predefinedOptions = ['Option 1', 'Option 2', 'Option 3']; // Add more options as needed

  const handleSelectOption = (option) => {
    onSelectOption(option);
    onDismiss();
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>Select an Option</Dialog.Title>
        <Dialog.ScrollArea style={styles.scrollArea}>
          <List.Section>
            {predefinedOptions.map((option, index) => (
              <List.Item
                key={index}
                title={option}
                onPress={() => handleSelectOption(option)}
              />
            ))}
            <Container style={styles.customOptionContainer}>
              <TextInput
                label="Custom Option"
                value={customOption}
                onChangeText={setCustomOption}
                style={styles.customOptionInput}
              />
              <Button onPress={() => handleSelectOption(customOption)}>OK</Button>
            </Container>
          </List.Section>
        </Dialog.ScrollArea>
      </Dialog>
    </Portal>
  );
};



export default OptionDialog;
