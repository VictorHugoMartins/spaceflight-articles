import axios from 'axios';

export const api: any = axios.create({
  baseURL: 'https://api.spaceflightnewsapi.net/v4/',
  headers: {
    'Content-Type': 'application/json',
  },
});