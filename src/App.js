import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import OurServicesPage from "./components/OurServicesPage";
import Page404 from "./components/Page404";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ContactPage from "./components/ContactPage";
import PasswordProtected from "./components/PasswordProtected";

function App() {
  return (
    <div className="App">
      <Router>
       
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<OurServicesPage />} />
          <Route path="/contact" element={<ContactPage />}> 
            {/* <Route path="/"></Route> */}
          </Route>
          <Route path="/protected" element={<PasswordProtected />} />
           <Route path="/404" element={<Page404 />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
        <Footer />
      </Router>

    </div>

  );
}

export default App;
