import React from 'react';

import { Box, Image, Text, Touchable } from 'lib_components';
import { getPaymentMethodImage } from 'lib_assets';
import { PaymentMethod } from 'lib_parse_subclass';

interface PaymentMethodCardProps {
  paymentMethod: PaymentMethod;
  onPaymentMethodPressed?: (paymentMethod: PaymentMethod) => void;
}

export const PaymentMethodCard: React.FC<PaymentMethodCardProps> = ({
  paymentMethod,
  onPaymentMethodPressed,
}: PaymentMethodCardProps) => (
  <Touchable onPress={() => onPaymentMethodPressed?.(paymentMethod)}>
    <Box backgroundColor="card" flexDirection={'row'} alignItems={'center'}>
      <Image source={getPaymentMethodImage(paymentMethod.method)} width={40} height={40} />
      <Text marginLeft={'m'} fontWeight="bold">
        {paymentMethod.phoneNumber}
      </Text>
    </Box>
  </Touchable>
);
