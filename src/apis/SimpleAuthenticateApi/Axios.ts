import axios from 'axios';

export default axios.create({
  headers: {
    post: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  baseURL: process.env.REACT_APP_COCOA_AUTH_API,
});
