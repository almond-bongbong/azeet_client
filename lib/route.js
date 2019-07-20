import Router from 'next/router';
import { toastActions } from 'store/modules/toast';

export const makeRedirect = (ctx, toUrl, useReturn = true) => {
  const { req, res, isServer, store } = ctx;
  const returnUrl = useReturn ? `?next=${isServer ? req.url : ctx.asPath}` : '';
  if (isServer) {
    res.writeHead(302, { Location: `${toUrl}${returnUrl}` });
    res.end();
  } else {
    store.dispatch(toastActions.toast('로그인 하셔야 이용가능합니다.'));
    Router.push(`${toUrl}${returnUrl}`);
  }
};

export default null;
