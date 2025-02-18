import { Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contacts";
import { NotFound } from "./pages/NotFound";
import { Movies } from "./pages/Movies";

function App() {
  return (
    <>
      <Header />
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Home</Link>
      </header>
      <main className=" content conatainer">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/movies/:id" element={<Movies/>}/>
          <Route path="*" element={<NotFound/>}/>

        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
