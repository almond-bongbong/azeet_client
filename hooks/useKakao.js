import { useEffect } from 'react';

const Kakao = typeof window !== 'undefined' && window.Kakao;
const UseKakao = () => {
  useEffect(() => {
    if (Kakao && !Kakao.Auth) Kakao.init('8cd0057a72cb5753848446901c1a0181');
  }, []);

  return Kakao;
};

export default UseKakao;
