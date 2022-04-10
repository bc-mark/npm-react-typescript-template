/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  FormControl as FormControlChakra,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input as InputChakra,
  Icon,
} from '@chakra-ui/react';
import { FieldHelperProps, FieldInputProps, FieldMetaProps } from 'formik';
import { AlertCircleOutline } from '@styled-icons/evaicons-outline';
import InputHOC from './InputHOC';
import { TInput } from './Input';

type TFormControl = {
  field?: [FieldInputProps<any>, FieldMetaProps<any>, FieldHelperProps<any>]
} & TInput;

export default function FormControl({
  name,
  field,
  label,
  error,
  helperText,
  propsLabel,
  propsError,
  propsHelper,
  sxWrapper,
  InputLeftAddon,
  InputRightAddon,
  InputLeftElement,
  InputRightElement,
  ...rest
}: TFormControl) {
  const [fieldData, meta] = field ?? [];
  const id = `${name}-input`;
  const isInvalid = (meta?.touched && !!meta?.error) || !!error;

  return (
    <FormControlChakra isInvalid={isInvalid} sx={{ mb: 4, ...sxWrapper }}>
      {!!label && <FormLabel htmlFor={id} {...propsLabel}>{label}</FormLabel>}
      <InputHOC
        InputLeftElement={InputLeftElement}
        InputRightElement={InputRightElement}
        InputLeftAddon={InputLeftAddon}
        InputRightAddon={InputRightAddon}
        size={rest.size}
      >
        <InputChakra id={id} type="text" name={name} {...fieldData} {...rest} />
      </InputHOC>
      <FormErrorMessage {...propsError}>
        <Icon as={AlertCircleOutline} mr="1" pos="relative" top="-1px" />
        {meta?.error || error}
      </FormErrorMessage>
      {!!helperText && <FormHelperText {...propsHelper}>{helperText}</FormHelperText>}
    </FormControlChakra>
  );
}
