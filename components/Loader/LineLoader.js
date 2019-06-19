import { Component } from 'react';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });


class LineLoader extends Component {
  constructor(props) {
    super(props);

    NProgress.start();
  }

  componentWillUnmount() {
    NProgress.done();
  }

  render() {
    return null;
  }
}

export default LineLoader;
