import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService/TermsOfService";
import Product from "./pages/Product/Product";
import ErrorPage from "./pages/ErrorPage";
import ScrollToTop from "./components/ScrolltoTop";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import Cancellation from "./pages/Cancellation/Cancellation";
import Success from "./pages/Success/Success";
import ToTopBtn from "./components/ToTopBtn";
import { Helmet } from "react-helmet-async";

const Layout = () => {
  return (
    <>
      <div className="app">
      <Helmet>
          <title>Kohua</title>
          <link rel="canonical" href="https://kohua.in/" />
          <meta
            name="description"
            content="Elevate your tea experience with our handcrafted, high-quality leaves sourced from Assam renowned tea gardens. Sip, savor, and discover the true essence of tea with us."
          />
          <link
            rel="icon"
            type="image/x-icon"
            href="./src/assets/images/logo.png"
            sizes="32x32"
          />
          <meta
            property="og:image"
            content="./src/assets/images/special-cat.webp"
          />
        </Helmet>
        <Navbar />
        <Outlet />
        <ToTopBtn />
        <Footer />
      </div>
    </>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading with a setTimeout
    setTimeout(() => {
      setIsLoading(false); // Set loading to false when loading is complete
    }, 3000); // Adjust the delay as needed
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products/:id" element={<Products />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cancellation" element={<Cancellation />} />
            <Route path="success" element={<Success />} />
            <Route
              path="terms-of-service"
              element={<TermsOfService />}
            />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      )}
    </Router>
  );
}

export default App;
