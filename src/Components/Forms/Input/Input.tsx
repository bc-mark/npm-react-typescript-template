import React, { FunctionComponent } from 'react';
import {
  FormLabelProps,
  InputProps,
  FormErrorMessageProps,
  HelpTextProps,
  StyleProps,
} from '@chakra-ui/react';
import FormikHOC from './FormikHOC';
import FormControl from './FormControl';

export type TInput = {
  name: string
  isFormik?: boolean
  label?: string
  error?: string
  helperText?: string
  propsLabel?: FormLabelProps
  propsError?: FormErrorMessageProps
  propsHelper?: HelpTextProps
  sxWrapper?: StyleProps
  InputLeftAddon?: string
  InputRightAddon?: string
  InputRightElement?: FunctionComponent
  InputLeftElement?: FunctionComponent
} & InputProps;

/**
 * Main Input component. Depending on the optional
 * "isFormik" prop (which is default to true). Will bind the formik methods
 * (onTouch, onChange, ETC) to the input.
 *
 * If there is no formik context in the parent "isFormik" will need to be
 * set to `false` which will then convert this component back to is default
 * functionality of being an uncontrolled component.
 */
export default function Input({ isFormik = true, name, ...rest }: TInput) {
  if (isFormik) {
    return (
      <FormikHOC name={name}>
        <FormControl name={name} {...rest} />
      </FormikHOC>
    );
  }

  return (
    <FormControl name={name} {...rest} />
  );
}
