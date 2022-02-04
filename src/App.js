import RightSide from "./components/RightSide";
import MobileHeader from "./components/MobileHeader";
import LeftSide from "./components/LeftSide";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <MobileHeader />
      <LeftSide />
      <RightSide />
      <Footer />
    </div>
  );
}

export default App;
