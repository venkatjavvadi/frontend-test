import React from "react";
import DropdownAnimation from "./components/DropdownAnimation";
import ThemeColor from "./components/ThemeColor";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dropdown" element={<DropdownAnimation />} />
        <Route path="/themecolor" element={<ThemeColor />} />
      </Routes>
    </Router>
  );
}

export default App;