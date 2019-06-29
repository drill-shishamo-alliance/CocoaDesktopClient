import axios from 'axios';
import { PostLoginRequest, PostLoginResponse } from './models/Login';
import { PostSignupRequest, PostSignupResponse } from './models/Signup';

export default class SimpleAuthenticateApi {
  constructor() {
    axios.defaults.baseURL = process.env.REACT_APP_COCOA_SIMPLE_AUTHENTICATE_API;
  }

  public async postSignup(body: PostSignupRequest) {
    try {
      return await axios.post<PostSignupResponse>('/signup', body);
    } catch (error) {
      throw error;
    }
  }

  public async postLogin(body: PostLoginRequest) {
    try {
      return await axios.post<PostLoginResponse>('/login', body);
    } catch (error) {
      throw error;
    }
  }
}
