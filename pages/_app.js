import '../styles/globals.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import '@fortawesome/fontawesome-svg-core/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}


export default MyApp
