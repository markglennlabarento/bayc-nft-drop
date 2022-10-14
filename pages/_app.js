import '../styles/globals.css'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'

const MyApp = ({ Component, pageProps }) => {
  return (
      <ThirdwebProvider
          desiredChainId={ChainId.Goerli}
          chainRpc={{
              [ChainId.Goerli]: 'https://goerli.infura.io/v3/353ad6ff1f1845428546ac2bef2abd9b',
          }}
      >
          <Component {...pageProps} />
      </ThirdwebProvider>
  )
}

export default MyApp
