import {
  YoutubeVideoCardCollection, MainHeading, studioTheme
} from '../src/ui-components';


import { Divider, ThemeProvider } from '@aws-amplify/ui-react'

import { google } from 'googleapis'

import styles from './VideoImage.module.css'
const Home = (props) => {
  return (
    <>
      <MainHeading title={`Most viewed talks ${process.env.NEXT_PUBLIC_CONFERENCE_NAME}.`} subheading={`Last updated at  ${props.lastUpdated}(Stockholm/Sweden)`} />
      <Divider></Divider>

      <YoutubeVideoCardCollection items={props.items}
        overrideItems={(item, index) => {
          return {
            overrides: { 'image': { className: styles.VideoImage } }
          }
        }}
      />

    </>


  )
}

let getMainDescription = (fullDescription) => {

  //includes regexp for a timestamp
  let result = fullDescription.split(/(?:Subscribe|Guest Speakers|\b\d{2}:\d{2}\b)+/)[0];;

  if (result == null || result == "") { return fullDescription; }
  else return result;
}
export async function getStaticProps() {
  const youtube = google.youtube({
    version: 'v3',
    auth: process.env.GOOGLE_API_KEY
  });

  const playlistIds = process.env.PLAYLIST.split(',');
  let dataMap = new Map();

  for (const playlistId of playlistIds) {
    let firstTime = true;
    let hasNextToken = false;
    let next = '';

    while (firstTime || hasNextToken) {
      firstTime = false;

      const items = await youtube.playlistItems.list({
        "part": [
          "snippet,contentDetails"
        ],
        "maxResults": 50,
        "pageToken": next,
        "playlistId": playlistId
      });

      if (items.data.nextPageToken != null &&
        (items.data.prevPageToken === undefined || items.data.nextPageToken != items.data.prevPageToken)) {
        hasNextToken = true;
        next = items.data.nextPageToken;
      } else {
        hasNextToken = false;
      }

      let ids = items.data.items?.reduce((a, c) => a.concat(String(c.contentDetails?.videoId)), new Array());

      const result = await youtube.videos.list({
        "part": [
          "snippet,contentDetails,statistics,id"
        ],
        "id": ids
      });
      
      result.data.items?.forEach(element => {
        dataMap.set(element.id, element);
      });
    }
  }

  const data = Array.from(dataMap.values()).sort((a, b) => Number(b.statistics?.viewCount) - Number(a.statistics?.viewCount));

  const lastUpdated = new Date().toLocaleString('sv-SE', {
    timeZone: 'Europe/Berlin',
  });

  const items = data?.reduce((a, c) => a.concat({ id: c.id, videoThumbnail: c.snippet.thumbnails.medium.url, videoTitle: c.snippet.title, videoDescription: getMainDescription(c.snippet.description), videoPlays: c.statistics.viewCount }), new Array());

  // Pass data to the page via props
  return {
    props: { items, lastUpdated },
    revalidate: 3600 // revalidate every hour
  };
}


export default Home;
