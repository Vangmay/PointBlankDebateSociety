import { ChakraProvider } from '@chakra-ui/react'
import {NewTheme} from './debate'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={NewTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp