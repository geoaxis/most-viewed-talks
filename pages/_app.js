import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';

import awsconfig from '../src/aws-exports';

import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "../src/ui-components";
import '@fontsource/inter/variable.css';



Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  
  return (
    <ThemeProvider theme={studioTheme}>
      <Component {...pageProps} />
    </ThemeProvider>);
}

export default MyApp
