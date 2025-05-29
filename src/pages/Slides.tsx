import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  LinearProgress,
  Chip,
  IconButton,
  useTheme,
} from "@mui/material";
import { useState, useEffect } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import SlideBienvenida from "./slides/SlideBienvenida";
import SlideEstructura from "./slides/SlideEstructura";
import SlideDocumentacion from "./slides/SlidesDocumentacion";
import SlideHerramientas from "./slides/SlidesHerramientas";
import SlideDespedida from "./slides/SlidesDespedidas";
import SlidePruebas from "./slides/SlidesPrueba";

const slideComponents = [
  SlideBienvenida,
  SlideEstructura,
  SlideDocumentacion,
  SlidePruebas,
  SlideHerramientas,
  SlideDespedida,
];

const slidesTitles = [
  "Bienvenida",
  "Estructura de Código",
  "Documentación",
  "Pruebas Unitarias",
  "Herramientas",
  "Despedida",
];

export default function Slides() {
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const isDarkMode = theme.palette.mode === "dark";

  const CurrentSlide = slideComponents[index];
  const progress = ((index + 1) / slideComponents.length) * 100;

  // Función para hacer scroll hacia arriba suavemente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Effect para scroll automático cuando cambia el índice
  useEffect(() => {
    scrollToTop();
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => Math.min(prev + 1, slideComponents.length - 1));
  };

  const prevSlide = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (slideIndex: number) => {
    setIndex(slideIndex);
  };

  const resetSlides = () => {
    setIndex(0);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <Container
      maxWidth={isFullscreen ? false : "lg"}
      sx={{
        mt: isFullscreen ? 0 : 4,
        mb: isFullscreen ? 0 : 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: isFullscreen ? "100vh" : "auto",
        bgcolor: "transparent",
      }}
    >
      {/* Header Controls */}
      {!isFullscreen && (
        <Box sx={{ width: "100%", maxWidth: 1200, mb: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
              }}
            >
              Presentación del Webinar
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                onClick={resetSlides}
                sx={{ color: theme.palette.primary.main }}
              >
                <RestartAltIcon />
              </IconButton>
              <IconButton
                onClick={toggleFullscreen}
                sx={{ color: theme.palette.primary.main }}
              >
                <FullscreenIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Progress Bar */}
          <Box sx={{ mb: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary }}
              >
                Progreso de la presentación
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                }}
              >
                {index + 1} de {slideComponents.length}
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: 8,
                borderRadius: 4,
                bgcolor:
                  theme.palette.mode === "light"
                    ? "rgba(130,0,124,0.1)"
                    : "rgba(210,74,224,0.2)",
                "& .MuiLinearProgress-bar": {
                  background:
                    theme.palette.mode === "light"
                      ? "linear-gradient(135deg, #82007C 0%, #D24AE0 100%)"
                      : "linear-gradient(135deg, #D24AE0 0%, #E879ED 100%)",
                  borderRadius: 4,
                },
              }}
            />
          </Box>

          {/* Slide Navigation Dots */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              justifyContent: "center",
              mb: 3,
              flexWrap: "wrap",
            }}
          >
            {slideComponents.map((_, i) => (
              <Chip
                key={i}
                label={slidesTitles[i]}
                onClick={() => goToSlide(i)}
                variant={i === index ? "filled" : "outlined"}
                sx={{
                  cursor: "pointer",
                  bgcolor:
                    i === index ? theme.palette.primary.main : "transparent",
                  color:
                    i === index
                      ? theme.palette.primary.contrastText
                      : theme.palette.primary.main,
                  borderColor: theme.palette.primary.main,
                  fontSize: "0.8rem",
                  "&:hover": {
                    bgcolor:
                      i === index
                        ? theme.palette.primary.dark
                        : theme.palette.mode === "light"
                        ? "rgba(130,0,124,0.1)"
                        : "rgba(210,74,224,0.1)",
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      )}
      {/* Slide Container */}
      <Paper
        elevation={isFullscreen ? 0 : 8}
        sx={{
          p: isFullscreen ? 6 : 6,
          maxWidth: isFullscreen ? "90vw" : "100%",
          width: "100%",
          minHeight: isFullscreen ? "80vh" : "100%",
          display: "flex",
          flexDirection: "column",
          // Cambio principal: usar directamente el fondo del tema
          background: isDarkMode
            ? `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`
            : `linear-gradient(135deg, #FFFFFF 0%, ${theme.palette.background.default} 100%)`,
          border:
            theme.palette.mode === "light"
              ? isFullscreen
                ? "3px solid rgba(130,0,124,0.2)"
                : "2px solid rgba(130,0,124,0.1)"
              : isFullscreen
              ? "3px solid rgba(210,74,224,0.3)"
              : "2px solid rgba(210,74,224,0.2)",
          borderRadius: isFullscreen ? 4 : 3,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 20% 80%, ${theme.palette.primary.main}15 0%, transparent 50%), 
                         radial-gradient(circle at 80% 20%, ${theme.palette.secondary.main}15 0%, transparent 50%)`,
            zIndex: 0,
            borderRadius: 2,
          },
        }}
      >
        {/* Slide Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {isFullscreen && (
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                }}
              >
                {index + 1} / {slideComponents.length}
              </Typography>
              <IconButton
                size="small"
                onClick={toggleFullscreen}
                sx={{ color: theme.palette.primary.main }}
              >
                <FullscreenIcon />
              </IconButton>
            </Box>
          )}
        </Box>

        {/* Slide Content */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            background: "transparent",
            borderRadius: 2,
            width: "100%",
          }}
        >
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <CurrentSlide />
          </Box>
        </Box>
      </Paper>

      {/* Navigation Controls */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 4,
          width: "100%",
          maxWidth: isFullscreen ? "90vw" : 1200,
          gap: 2,
        }}
      >
        <Button
          onClick={prevSlide}
          disabled={index === 0}
          variant="outlined"
          startIcon={<NavigateBeforeIcon />}
          sx={{
            minWidth: 140,
            py: 1.5,
            borderWidth: 2,
            borderColor:
              index === 0 ? theme.palette.divider : theme.palette.primary.main,
            color:
              index === 0
                ? theme.palette.text.disabled
                : theme.palette.primary.main,
            "&:hover": {
              borderWidth: 2,
              borderColor:
                index === 0
                  ? theme.palette.divider
                  : theme.palette.primary.dark,
              backgroundColor:
                index === 0
                  ? "transparent"
                  : theme.palette.mode === "light"
                  ? "rgba(130,0,124,0.05)"
                  : "rgba(210,74,224,0.05)",
            },
            "&:disabled": {
              borderColor: theme.palette.divider,
              color: theme.palette.text.disabled,
            },
          }}
        >
          Anterior
        </Button>

        {/* Center Info */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            maxWidth: 300,
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: theme.palette.text.secondary, mb: 1 }}
          >
            Slide {index + 1} de {slideComponents.length}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              width: "100%",
              height: 4,
              borderRadius: 2,
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(130,0,124,0.1)"
                  : "rgba(210,74,224,0.2)",
              "& .MuiLinearProgress-bar": {
                background:
                  theme.palette.mode === "light"
                    ? "linear-gradient(135deg, #82007C 0%, #D24AE0 100%)"
                    : "linear-gradient(135deg, #D24AE0 0%, #E879ED 100%)",
                borderRadius: 2,
              },
            }}
          />
        </Box>

        <Button
          onClick={nextSlide}
          disabled={index === slideComponents.length - 1}
          variant="contained"
          endIcon={<NavigateNextIcon />}
          sx={{
            minWidth: 140,
            py: 1.5,
            bgcolor:
              index === slideComponents.length - 1
                ? theme.palette.action.disabled
                : theme.palette.primary.main,
            "&:hover": {
              bgcolor:
                index === slideComponents.length - 1
                  ? theme.palette.action.disabled
                  : theme.palette.primary.dark,
            },
            "&:disabled": {
              bgcolor: theme.palette.action.disabled,
              color: theme.palette.action.disabled,
            },
          }}
        >
          {index === slideComponents.length - 1 ? "Finalizado" : "Siguiente"}
        </Button>
      </Box>

      {/* Keyboard Instructions */}
      {!isFullscreen && (
        <Typography
          variant="caption"
          sx={{
            mt: 3,
            color: theme.palette.text.secondary,
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          💡 Consejo: Usa las teclas ← → para navegar entre slides, o F11 para
          pantalla completa
        </Typography>
      )}
    </Container>
  );
}
