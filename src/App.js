import AboutScreen from "./components/AboutScreen/AboutScreen";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import ProcessScreen from "./components/ProcessScreen/ProcessScreen"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/process" element={<ProcessScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="*" element={<h1 style={{ marginLeft: "35%" }}>Данной страницы не существует</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
