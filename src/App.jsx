import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Stats from './components/Stats';
import Areas from './components/Areas';
import FAQ from './components/FAQ';
import Estimate from './components/Estimate';
import Footer from './components/Footer';
import MobileBar from './components/MobileBar';

export default function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main id="top">
        <Hero />
        <TrustStrip />
        <Gallery />
        <Services />
        <Process />
        <Stats />
        <Areas />
        <FAQ />
        <Estimate />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
