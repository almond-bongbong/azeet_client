import Router from 'next/router';

export function makeRedirect(ctx, toUrl, useReturn = true) {
  const { req, res, isServer } = ctx;
  const returnUrl = useReturn ? `?next=${isServer ? req.originalUrl : ctx.asPath}` : '';
  if (isServer) {
    res.writeHead(302, { Location: `${toUrl}${returnUrl}` });
    res.end();
  } else {
    Router.push(`${toUrl}${returnUrl}`);
  }
}

export default null;
