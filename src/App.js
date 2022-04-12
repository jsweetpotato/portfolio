import "./css/utils.min.css";
import "./css/header.min.css";
import Header from "./comp/Header";
import Canvas from './comp/Canvas';
import Footer from './comp/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Canvas />
      <Footer />
    </div>
  );
}

export default App;
