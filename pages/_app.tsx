import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global-style";
import { theme } from "../styles/theme";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";

const getLibrary = (provider: any) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Web3ReactProvider>
    </ThemeProvider>
  );
}

export default MyApp;
