import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/footer';
import Services from './pages/Services';
import Plans from './pages/Plans';
import Blog from './pages/Blog';
import Home from './pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Header />
      <Routes> 
        <Route path="/" element={<Home />}  />
        <Route path="/services" element={<Services />} />
        <Route path="/plans" element={<Plans />}  />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      {/* <Services/> */}
      {/* <Plans/> */}
      
      <Footer/>
      </BrowserRouter>
      
      


    </div>
      

      
       
  );
}

export default App;
