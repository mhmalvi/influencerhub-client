import "./App.css";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import ScrollToTop from "./Components/Shared/ScrollToTop";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
