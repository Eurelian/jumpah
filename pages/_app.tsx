import "../styles/globals.css";
import "@fontsource/exo";
import { ChakraProvider } from "@chakra-ui/react";

import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import theme from "../lib/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
