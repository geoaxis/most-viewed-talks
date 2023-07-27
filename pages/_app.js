import '../styles/globals.css'

import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';

import awsconfig from '../src/aws-exports';

import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "../src/ui-components";



Amplify.configure( {...awsconfig, ssr: true });

import { AwsRum } from 'aws-rum-web';


try {
  const config = {
    sessionSampleRate: 1,
    guestRoleArn: process.env.NEXT_PUBLIC_RUM_GUEST_ROLE_ARN,
    identityPoolId: process.env.NEXT_PUBLIC_RUM_IDENTITY_POOL_ID,
    endpoint: process.env.NEXT_PUBLIC_RUM_ENDPOINT,
    telemetries: ["performance","errors","http"],
    allowCookies: true,
    enableXRay: false
  };

  const awsRum = new AwsRum(
    process.env.NEXT_PUBLIC_RUM_APPLICATION_ID,
    process.env.NEXT_PUBLIC_RUM_APPLICATION_VERSION,
    process.env.NEXT_PUBLIC_RUM_APPLICATION_REGION,
    config
  );
} catch (error) {
  // Ignore errors thrown during CloudWatch RUM web client initialization
}



function MyApp({ Component, pageProps }) {
  
  return (
    <ThemeProvider theme={studioTheme}>
      <Component {...pageProps} />
    </ThemeProvider>);
}

export default MyApp
