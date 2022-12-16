
import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Price from './components/Prices/Price';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testmonials from './components/Testimonials/Testmonials';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Price/>
      <Testmonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
