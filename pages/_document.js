import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import NewTheme from './debate'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <title>Arguably The Best</title>
        <body>
          <ColorModeScript initialColorMode='dark' />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}