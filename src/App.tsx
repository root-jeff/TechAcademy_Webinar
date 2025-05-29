import { useState, useMemo } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import {
  ThemeProvider,
  CssBaseline,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Chip,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import { createTheme } from "@mui/material/styles";
import { getDesignTokens } from "./theme/theme";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Material from "./pages/Material";
import Slides from "./pages/Slides";
import NotFound from "./pages/NotFound";

function Navbar({
  toggleColorMode,
  mode,
}: {
  toggleColorMode: () => void;
  mode: "light" | "dark";
}) {
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width:768px)");
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(
    null
  );

  const now = new Date();

  // Definir la zona horaria UTC-5 manualmente (Ecuador, Colombia, etc.)
  const start = new Date("2025-05-29T21:00:00Z"); // 16:00 UTC-5
  const end = new Date("2025-05-29T22:00:00Z"); // 17:00 UTC-5

  const isLive = now >= start && now <= end;

  const navigationItems = [
    { path: "/agenda", label: "Agenda", icon: <EventIcon /> },
    { path: "/material", label: "Material", icon: <LibraryBooksIcon /> },
    { path: "/slides", label: "Slides", icon: <SlideshowIcon /> },
  ];

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "linear-gradient(135deg, #82007C 0%, #D24AE0 100%)",
        boxShadow: "0 4px 20px rgba(130, 0, 124, 0.3)",
        borderBottom: "3px solid rgba(255, 204, 0, 0.8)",
      }}
    >
      <Toolbar sx={{ py: 1 }}>
        {/* Logo/Brand */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
            flexGrow: isMobile ? 1 : 0,
            mr: isMobile ? 0 : 4,
          }}
        >
          <HomeIcon sx={{ mr: 1, fontSize: "1.5rem" }} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              background: "linear-gradient(45deg, #FFFFFF 30%, #FFCC00 90%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "1.1rem", md: "1.25rem" },
            }}
          >
            XtrimUP Webinar
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 1, flexGrow: 1 }}
          >
            {navigationItems.map((item) => (
              <Button
                key={item.path}
                color="inherit"
                component={Link}
                to={item.path}
                startIcon={item.icon}
                sx={{
                  fontWeight: 600,
                  px: 3,
                  py: 1,
                  borderRadius: 3,
                  textTransform: "none",
                  transition: "all 0.3s ease-in-out",
                  position: "relative",
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: isActivePath(item.path) ? "80%" : "0%",
                    height: 3,
                    bgcolor: "#FFCC00",
                    borderRadius: "2px 2px 0 0",
                    transition: "width 0.3s ease-in-out",
                  },
                  bgcolor: isActivePath(item.path)
                    ? "rgba(255,255,255,0.1)"
                    : "transparent",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.15)",
                    transform: "translateY(-2px)",
                    "&:before": {
                      width: "80%",
                    },
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}

        {isLive && (
          <Chip
            label="EN VIVO"
            size="medium"
            sx={{
              bgcolor: "#FFCC00",
              color: "#82007C",
              fontWeight: 700,
              fontSize: "0.75rem",
              mr: 2,
              animation: "pulse 2s infinite",
              "@keyframes pulse": {
                "0%": { opacity: 1 },
                "50%": { opacity: 0.7 },
                "100%": { opacity: 1 },
              },
            }}
          />
        )}

        {/* Theme Toggle */}
        <IconButton
          onClick={toggleColorMode}
          color="inherit"
          sx={{
            bgcolor: "rgba(255,255,255,0.1)",
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.2)",
              transform: "rotate(180deg)",
            },
            transition: "all 0.3s ease-in-out",
          }}
        >
          {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>

        {/* Mobile Menu */}
        {isMobile && (
          <>
            <IconButton
              color="inherit"
              onClick={handleMobileMenuOpen}
              sx={{ ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={mobileMenuAnchor}
              open={Boolean(mobileMenuAnchor)}
              onClose={handleMobileMenuClose}
              PaperProps={{
                sx: {
                  bgcolor: "background.paper",
                  minWidth: 200,
                  "& .MuiMenuItem-root": {
                    py: 1.5,
                  },
                },
              }}
            >
              {navigationItems.map((item) => (
                <MenuItem
                  key={item.path}
                  component={Link}
                  to={item.path}
                  onClick={handleMobileMenuClose}
                  sx={{
                    color: "text.primary",
                    fontWeight: isActivePath(item.path) ? 700 : 400,
                    bgcolor: isActivePath(item.path)
                      ? "rgba(130,0,124,0.1)"
                      : "transparent",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {item.icon}
                    {item.label}
                  </Box>
                </MenuItem>
              ))}
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            minHeight: "100vh",
            background:
              mode === "light"
                ? "linear-gradient(135deg, #F5E6F8 0%, #FFFFFF 50%, #F5E6F8 100%)"
                : "linear-gradient(135deg, #121212 0%, #1E1E1E 50%, #121212 100%)",
          }}
        >
          <Navbar toggleColorMode={toggleColorMode} mode={mode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/material" element={<Material />} />
            <Route path="/slides" element={<Slides />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
