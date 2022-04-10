import {
  ChakraProvider,
  ChakraProviderProps,
  extendTheme,
} from '@chakra-ui/react'
import React from 'react'
import baseTheme from '../Theme'

export default function BCProvider({
  children,
  theme,
  ...rest
}: ChakraProviderProps) {
  const _theme = extendTheme({ ...baseTheme, theme })
  return (
    <ChakraProvider theme={_theme} {...rest}>
      {children}
    </ChakraProvider>
  )
}
