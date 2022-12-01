import '../styles/globals.css'

import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';

import awsconfig from '../src/aws-exports';

import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "../src/ui-components";



Amplify.configure(awsconfig);

import { AwsRum } from 'aws-rum-web';




function MyApp({ Component, pageProps }) {

  try {
    const config = {
      sessionSampleRate: 1,
      guestRoleArn: "arn:aws:iam::518912499641:role/RUM-Monitor-eu-west-1-518912499641-8502404389661-Unauth",
      identityPoolId: "eu-west-1:985897d8-acf4-4ad3-a595-da94149558f4",
      endpoint: "https://dataplane.rum.eu-west-1.amazonaws.com",
      telemetries: ["performance","errors","http"],
      allowCookies: true,
      enableXRay: false
    };
  
    const APPLICATION_ID = '6fbeb63f-f0c5-4725-a14b-46ecbf6e87df';
    const APPLICATION_VERSION = '1.0.0';
    const APPLICATION_REGION = 'eu-west-1';
  
    const awsRum = new AwsRum(
      APPLICATION_ID,
      APPLICATION_VERSION,
      APPLICATION_REGION,
      config
    );
  } catch (error) {
    // Ignore errors thrown during CloudWatch RUM web client initialization
  }
  
  return (
    <ThemeProvider theme={studioTheme}>
      <Component {...pageProps} />
    </ThemeProvider>);
}

export default MyApp
