import "./App.css";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div className="mx-auto">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
