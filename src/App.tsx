import { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, CssBaseline, IconButton, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { createTheme } from '@mui/material/styles';
import { getDesignTokens } from './theme/theme';
import Home from './pages/Home';
import Agenda from './pages/Agenda';
import Material from './pages/Material';
import Slides from './pages/Slides';
import NotFound from './pages/NotFound';


function Navbar({ toggleColorMode, mode }: { toggleColorMode: () => void; mode: 'light' | 'dark' }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }} component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          XtrimUP Webinar
        </Typography>
        <Button color="inherit" component={Link} to="/agenda">Agenda</Button>
        <Button color="inherit" component={Link} to="/material">Material</Button>
        <Button color="inherit" component={Link} to="/slides">Slides</Button>
        <IconButton onClick={toggleColorMode} color="inherit">
          {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar toggleColorMode={toggleColorMode} mode={mode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/material" element={<Material />} />
          <Route path="/slides" element={<Slides />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;