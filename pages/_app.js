import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';

import awsconfig from '../src/aws-exports';

import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "../src/ui-components";



Amplify.configure(awsconfig);

import { AwsRum } from 'aws-rum-web';


try {
  const config = {
    sessionSampleRate: 1,
    guestRoleArn: process.env.RUM_GUEST_ROLE_ARN,
    identityPoolId: process.env.RUM_IDENTITY_POOL_ID,
    endpoint: process.env.RUM_ENDPOINT,
    telemetries: ["performance","errors","http"],
    allowCookies: true,
    enableXRay: false
  };

  const APPLICATION_ID = process.env.RUM_APPLICATION_ID;
  const APPLICATION_VERSION = process.env.RUM_APPLICATION_VERSION;
  const APPLICATION_REGION = process.env.RUM_APPLICATION_REGION;

  const awsRum = new AwsRum(
    APPLICATION_ID,
    APPLICATION_VERSION,
    APPLICATION_REGION,
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
