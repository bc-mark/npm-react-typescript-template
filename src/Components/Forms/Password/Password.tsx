/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Icon, IconButton, useBoolean } from '@chakra-ui/react';
import { EyeOff, Eye } from '@styled-icons/remix-line';
import Input, { TInput } from '../Input/Input';

type TPassword = TInput;

export default function Password({ ...rest }: TPassword) {
  const [isPassword, setIsPassword] = useBoolean(true);

  return (
    <Input
      type={isPassword ? 'password' : 'text'}
      InputRightElement={() => (
        <IconButton aria-label="password toggle" variant="unstyled" onClick={setIsPassword.toggle}>
          <Icon as={isPassword ? Eye : EyeOff} color="accent.500" boxSize="5" />
        </IconButton>
      )}
      {...rest}
    />
  );
}
