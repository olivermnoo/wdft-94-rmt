import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SeriePage } from "./pages/SeriePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv/:tv_id" element={<SeriePage />} />
      </Routes>
    </>
  );
}

export default App;
