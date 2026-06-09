import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Spots from "./Pages/Spots";
import Error from "./Pages/Error";

function App() {
  return (
    <BrowserRouter basename="/rocket-bootcamp-website/react-week3/dist/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="spots" element={<Spots />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
