import { Routes, Route } from "react-router-dom";

import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contacts";
import { NotFound } from "./pages/NotFound";
import { Movies } from "./pages/Movies";
import { Layout } from "./components/Layout";
import { Blog } from "./components/Blog";

function App() {
  return (
    <>
      <main className=" content conatainer">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="blog" element={<Blog />} />
            <Route path="movies/:id" element={<Movies />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
