import {
  YoutubeVideoCardCollection
} from '../src/ui-components';

import { google } from 'googleapis'


const Home = (props) => {
  return (
    <>
     <h1>Most Played Talks : Last Updated {props.lastUpdated}</h1>
     <YoutubeVideoCardCollection items={props.items} />
    </>
  )
}


export async function getStaticProps() {

  const youtube = google.youtube({
    version: 'v3',
    auth: process.env.GOOGLE_API_KEY
  });

  let firstTime = true;
  let hasNextToken = false;
  let next = '';
  let dataMap = new Map();

  while (firstTime || hasNextToken) {
    firstTime = false;

    const items = await youtube.playlistItems.list({
      "part": [
        "snippet,contentDetails"
      ],
      "maxResults": 50,
      "pageToken": next,
      "playlistId": process.env.PLAYLIST
    });


    if (items.data.nextPageToken != null &&
      (items.data.prevPageToken === undefined || items.data.nextPageToken != items.data.prevPageToken)) {
      hasNextToken = true;
      next = items.data.nextPageToken;
    } else {
      hasNextToken = false;

    }

    let ids = items.data.items?.reduce((a, c) => a.concat(String(c.contentDetails?.videoId)), new Array())


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

  const data = Array.from(dataMap.values()).sort((a, b) => Number(b.statistics?.viewCount) - Number(a.statistics?.viewCount))


  const lastUpdated = new Date().toLocaleString('sv-SE', {
    timeZone: 'Europe/Berlin',
  })

  let items = data?.reduce((a, c) => a.concat({ id: c.id, videoThumbnail: c.snippet.thumbnails.standard.url, videoTitle: c.snippet.title, videoDescription: c.snippet.description, videoPlays: c.statistics.viewCount }), new Array())

  // Pass data to the page via props
  return { props: { items, lastUpdated } }
}

export default Home;