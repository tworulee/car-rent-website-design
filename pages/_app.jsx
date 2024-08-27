// pages/_app.js
import NavBarTop from '@/components/NavBarTop';
import '../app/globals.css';
import Footer from '@/components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBarTop/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
