import type { PaletteMode } from "@mui/material";
import type { ThemeOptions } from "@mui/material/styles";

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#82007C",
            light: "#D24AE0",
            dark: "#5A0055",
            contrastText: "#FFFFFF",
          },
          secondary: {
            main: "#FFCC00",
            light: "#FFE066",
            dark: "#CC9900",
            contrastText: "#82007C",
          },
          background: {
            default: "#F5E6F8",
            paper: "#FFFFFF",
          },
          text: {
            primary: "#333333",
            secondary: "#666666",
          },
          divider: "#CCCCCC",
        }
      : {
          primary: {
            main: "#D24AE0",
            light: "#E879ED",
            dark: "#82007C",
            contrastText: "#FFFFFF",
          },
          secondary: {
            main: "#FFCC00",
            light: "#FFE066",
            dark: "#CC9900",
            contrastText: "#000000",
          },
          background: {
            default: "#121212",
            paper: "#1E1E1E",
          },
          text: {
            primary: "#FFFFFF",
            secondary: "#CCCCCC",
          },
          divider: "#444444",
        }),
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
      fontSize: "2.125rem",
      lineHeight: 1.2,
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.3,
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          fontWeight: 600,
          fontSize: "1rem",
          padding: "12px 24px",
          boxShadow: "none",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0 8px 25px rgba(130, 0, 124, 0.3)",
            transform: "translateY(-2px)",
          },
        },
        contained: {
          "&:hover": {
            backgroundColor: "#5A0055",
          },
        },
        outlined: {
          borderWidth: 2,
          "&:hover": {
            borderWidth: 2,
            backgroundColor: "rgba(130, 0, 124, 0.08)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 8px 32px rgba(130, 0, 124, 0.12)",
          backdropFilter: "blur(10px)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "linear-gradient(135deg, #82007C 0%, #D24AE0 100%)",
          boxShadow: "0 4px 20px rgba(130, 0, 124, 0.3)",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          marginBottom: 8,
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: "rgba(130, 0, 124, 0.05)",
            transform: "translateX(8px)",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "#82007C",
          fontWeight: 600,
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            color: "#D24AE0",
            textDecoration: "underline",
          },
        },
      },
    },
  },
});
