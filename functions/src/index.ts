import * as functions from 'firebase-functions';
import axios, { AxiosRequestConfig } from 'axios';

require('dotenv').config();

const FB_ACCESS_TOKEN = functions.config().secrets.fb_access_token || process.env.FB_ACCESS_TOKEN;

interface fbPost {
  permalink_url: string;
  message: string;
  full_picture: string;
  from: { name: string; id: string };
  id: string;
}

interface AxiosResponse {
  data: { data: fbPost[] };
}

const getMostRecentPost = async () => {
  const options: AxiosRequestConfig = {
    url: `https://graph.facebook.com/v6.0/790534394301792/posts?fields=permalink_url,from,message,full_picture&access_token=${FB_ACCESS_TOKEN}&format=json`,
  };
  const response: AxiosResponse = await axios(options);
  const postInfo = response.data.data.filter(
    (post) => post.from.name === 'The Meatball Stoppe' && post.full_picture,
  )[0];
  postInfo.message = postInfo.message ? postInfo.message.slice(0, 115) + '...' : 'View the latest post on Facebook ⇗';
  return postInfo;
};

export const MostRecentPost = functions.https.onRequest(async (request, response) => {
  const mostRecentPost = await getMostRecentPost();
  response.send(mostRecentPost);
});
