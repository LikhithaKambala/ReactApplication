
import { useState } from "react";
import Home from './Home.jsx';
import { ThemeContext } from './ThemeContext.jsx';

function App() {
  const [darkmode, setDarkmode] = useState("light");

  const handleToggleDarkMode = () => {
    setDarkmode(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={darkmode}>
      <Home toggleDarkmode={handleToggleDarkMode} />
    </ThemeContext.Provider>
  );
}

export default App;
