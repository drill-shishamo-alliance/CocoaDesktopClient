import axios from './Axios';
import { PostLoginRequest, PostLoginResponse } from './models/Login';
import { PostSignupRequest, PostSignupResponse } from './models/Signup';

class SimpleAuthenticateApi {
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

export default new SimpleAuthenticateApi();
