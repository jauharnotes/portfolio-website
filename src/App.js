import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

function App() {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
    <div style={{ backgroundColor: darkMode ? "#222" : "#fff", color: darkMode && "#fff" }}>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
