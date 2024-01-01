import Home from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Footer from "./components/Footer";
import Error404 from "./pages/Error404";
import Header from "./components/Header";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:pokemonId" element={<Details />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
