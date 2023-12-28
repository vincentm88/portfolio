import React from 'react';
import Home from './Pages/Home/Home';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });
function App() {
  const title = "Vincent Martinez";
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevToggleColorMode) => (prevToggleColorMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        components: {

        }
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className="App" style={{minHeight:"100vh", display:'flex', flexDirection: 'column'}}>
          <CssBaseline />
          {<Navbar colorMode={colorMode} theme={theme} title={title} />}
          <Home />
          <Footer title={title} />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
