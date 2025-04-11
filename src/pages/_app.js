// pages/_app.js
import '../styles/globals.css'; // Import your global CSS file (which includes Tailwind)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
