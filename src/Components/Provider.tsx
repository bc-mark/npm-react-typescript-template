import { ChakraProvider } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import theme from '../Theme'

type TProvider = {
  children: ReactNode
}

export default function BCProvider({ children }: TProvider) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
