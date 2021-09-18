// _app.jsx は全ページで適用される部分を記述するファイル
import 'src/styles/globals.css';
import './style.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
