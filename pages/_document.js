/* eslint-disable */
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { initAxios } from 'config/configureAxios';

class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    initAxios();
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styles = sheet.getStyleElement();

    return { ...page, styles };
  }
}

export default MyDocument;
