import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import SistemaSolar from "./component/sistema-solar";




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sistema-solar" element={<SistemaSolar />} />
      </Routes>
    </>
  );
}
export default App;