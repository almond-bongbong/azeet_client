import axios from 'axios';

export const auth = () => axios.post('/auth');

export const authKakao = kakaoToken => axios({
  method: 'post',
  url: '/auth/kakao',
  headers: { 'x-auth-token': kakaoToken },
});
