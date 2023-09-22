import './App.css';
import Nav from './Components/Nav/Nav';
import Header from './Components/Header/Header';
import HeaderBottom from './Components/Header/HeaderBottom';
import ProductNav from './Components/Product/ProductNav';
import StudentInsurance from './Components/Product/StudentInsurance';
import TravelInsurance from './Components/Product/TravelInsurance';
import About from './Components/About/About';
import ResourceReview from './Components/Resources/ResourceReview';
import ResourceCard from './Components/Resources/ResourceCard';
import ResourceContact from './Components/Resources/ResourceContact';
import ResourceFeature from './Components/Resources/ResourceFeature';
import Quote from './Components/Quote/Quote';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div >
      <Nav/>
      <Header/>
      <HeaderBottom/>
      <ProductNav/>
      <StudentInsurance />
      <TravelInsurance />
      <About />
      <ResourceReview />
      <ResourceCard/>
      <ResourceContact/>
      <ResourceFeature />
      <Quote/>
      <Footer/>
    </div>
  );
}

export default App;
