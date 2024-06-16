import React, { useState } from 'react';
import { Box, Button, TextField } from 'lib_components';

const CreditCardInput = ({ onCardDetailsChange }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardDetailsChange = () => {
    const cardDetails = {
      cardNumber,
      cardHolderName,
      expiryDate,
      cvv,
    };
    onCardDetailsChange(cardDetails);
  };

  return (
    <Box flex={1}>
      <Box flex={1}>
        <TextField
          inputProps={{
            placeholder: 'Card Number',
            value: cardNumber,
            onChangeText: { setCardNumber },
            keyboardType: 'numeric',
          }}
        />
        <TextField
          inputProps={{
            placeholder: 'Cardholder Name',
            value: cardHolderName,
            onChangeText: { setCardHolderName },
          }}
        />
        <TextField
          inputProps={{
            placeholder: 'Expiry Date (MM/YY)',
            value: expiryDate,
            onChangeText: { setExpiryDate },
          }}
        />
        <TextField
          inputProps={{
            placeholder: 'CVV',
            value: cvv,
            onChangeText: setCvv,
            keyboardType: 'numeric',
          }}
        />
      </Box>
      <Button label="Save Card Details" onPress={handleCardDetailsChange} />
    </Box>
  );
};

export default CreditCardInput;
