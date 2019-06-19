import React, { Fragment } from 'react';

export default function newlineText(text) {
  return text.split('\\n').map(line => (
    <Fragment key={line}>
      {line}
      <br />
    </Fragment>
  ));
}
