import { extendTheme } from '@chakra-ui/react'
import { lineHeights } from './Foundations/LineHeight'

export default extendTheme({
  theme: 'base',
  lineHeights,
  config: { cssVarPrefix: 'bc' },
})
