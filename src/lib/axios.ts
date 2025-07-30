import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  // headers: {
  //   'X-Api-Version': 'v1',
  //   'X-Api-Token':
  //     '7ca0546c41c62986d23393d351c6ba47d15bc3a069fb3630e3efb4a53c340b11',
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*',
  //   Accept: '*/*',
  // },
});
