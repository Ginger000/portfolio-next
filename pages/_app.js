import '../styles/globals.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Script from 'next/script';

// <!-- Global site tag (gtag.js) - Google Analytics -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-LRC4934Z3B"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-LRC4934Z3B');
// </script>

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />

            <Script strategy="lazyOnload">
                {`window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});`}
            </Script>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
