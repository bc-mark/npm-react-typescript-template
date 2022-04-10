import {
  InputGroup,
  InputLeftAddon as InputLeftAddonC,
  InputLeftElement as InputLeftElementC,
  InputRightAddon as InputRightAddonC,
  InputRightElement as InputRightElementC,
} from '@chakra-ui/react';
import React, { FunctionComponent, ReactNode } from 'react';

type TInputHOC = {
  size?: string
  children: ReactNode
  InputLeftElement?: FunctionComponent
  InputRightElement?: FunctionComponent
  InputLeftAddon?: string
  InputRightAddon?: string
};

/**
 * HOC like component to tidy up the Input component.
 * If there's InputLeftElement | InputRightElement wrap the input
 * in the InputGroup component.
 */
export default function InputHOC({
  size,
  InputLeftElement,
  InputRightElement,
  InputLeftAddon,
  InputRightAddon,
  children,
}: TInputHOC) {
  if (InputLeftElement || InputRightElement) {
    return (
      <InputGroup size={size}>
        {InputLeftElement && (
          <InputLeftElementC>
            <InputLeftElement />
          </InputLeftElementC>
        )}

        {children}

        {InputRightElement && (
          <InputRightElementC>
            <InputRightElement />
          </InputRightElementC>
        )}
      </InputGroup>
    );
  }

  if (InputLeftAddon || InputRightAddon) {
    return (
      <InputGroup size={size}>
        {InputLeftAddon && <InputLeftAddonC>{InputLeftAddon}</InputLeftAddonC>}

        {children}

        {InputRightAddon && (
          <InputRightAddonC>{InputRightAddon}</InputRightAddonC>
        )}
      </InputGroup>
    );
  }

  return <>{children}</>;
}
