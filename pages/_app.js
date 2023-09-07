import '../styles/globals.css'

import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "../src/ui-components";

function MyApp({ Component, pageProps }) {
  
  return (
    <ThemeProvider theme={studioTheme}>
      <Component {...pageProps} />
    </ThemeProvider>);
}

export default MyApp
