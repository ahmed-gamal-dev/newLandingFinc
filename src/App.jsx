import './app/globals.css';
import Header from './compnents/Header';
import Footer from './compnents/Footer';
import Homee from './app/pages/Home/page';

export default function App() {
  return (
    <>
      <Header />
      <div className="items-center justify-items-center min-h-screen">
        <Homee />
      </div>
      <Footer />
    </>
  );
}
