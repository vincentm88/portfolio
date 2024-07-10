import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import NewsAggregator from './Pages/Projects/News-Aggregator/News-Aggregator';
import Articles from './Components/Articles/Articles';
import Portfolio from './Pages/Projects/Portfolio/Portfolio';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const title = "Vincent Martinez";
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App" style={{ minHeight: "100vh", display: 'flex', flexDirection: 'column' }}>
            <CssBaseline />
            <Navbar colorMode={colorMode} theme={theme} title={title} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/sports-news-aggregator" element={<NewsAggregator />} />
              <Route path="/projects/sports-news-aggregator/demo" element={<Articles />} />
              <Route path="/projects/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer title={title} />
          </div>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
