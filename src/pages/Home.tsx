import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Grid,
  Chip,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import CodeIcon from "@mui/icons-material/Code";

export default function Home() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
          borderRadius: 4,
          color: theme.palette.primary.contrastText,
          p: { xs: 4, sm: 6 },
          mb: 6,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="${encodeURIComponent(
              theme.palette.primary.contrastText
            )}" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          },
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 800,
            mb: 2,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          }}
        >
          Del Caos al Código Limpio
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 4,
            opacity: 0.9,
            maxWidth: 600,
            mx: "auto",
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
            px: { xs: 2, sm: 0 },
          }}
        >
          Transforma tu desarrollo backend con Flask y Angular. Aprende a
          trabajar en equipo con código claro, documentado y probado.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
            mb: 4,
            px: { xs: 2, sm: 0 },
          }}
        >
          <Chip
            icon={<AccessTimeIcon />}
            label="1 hora"
            sx={{
              bgcolor: `${theme.palette.primary.contrastText}20`,
              color: theme.palette.primary.contrastText,
              fontSize: { xs: "0.8rem", sm: "0.875rem" },
            }}
          />
          <Chip
            icon={<PeopleIcon />}
            label="Desarrollo en equipo"
            sx={{
              bgcolor: `${theme.palette.primary.contrastText}20`,
              color: theme.palette.primary.contrastText,
              fontSize: { xs: "0.8rem", sm: "0.875rem" },
            }}
          />
          <Chip
            icon={<CodeIcon />}
            label="Flask + Angular"
            sx={{
              bgcolor: `${theme.palette.primary.contrastText}20`,
              color: theme.palette.primary.contrastText,
              fontSize: { xs: "0.8rem", sm: "0.875rem" },
            }}
          />
        </Box>
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/slides"
          startIcon={<PlayArrowIcon />}
          sx={{
            bgcolor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
            fontWeight: 700,
            fontSize: { xs: "1rem", sm: "1.1rem" },
            px: { xs: 3, sm: 4 },
            py: 1.5,
            "&:hover": {
              bgcolor: theme.palette.secondary.light,
              transform: "scale(1.05)",
            },
          }}
        >
          Comenzar Webinar
        </Button>
      </Box>

      {/* Features Grid */}
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ mb: 6 }}>
        {[
          {
            title: "Estructura Clara",
            description:
              "Organiza tu código Flask y Angular de manera profesional y escalable.",
            icon: "🏗️",
          },
          {
            title: "Documentación Efectiva",
            description:
              "Aprende a documentar APIs con Swagger y mantener código legible.",
            icon: "📚",
          },
          {
            title: "Pruebas Unitarias",
            description:
              "Implementa testing robusto en Python/Flask y Angular para mayor confiabilidad.",
            icon: "🧪",
          },
          {
            title: "Casos Reales",
            description:
              "Ejemplos prácticos y situaciones del mundo real para aplicar inmediatamente.",
            icon: "💼",
          },
        ].map((feature, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4 },
                height: "100%",
                background:
                  theme.palette.mode === "light"
                    ? `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`
                    : `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
                border: `1px solid ${theme.palette.primary.main}20`,
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: `0 20px 40px ${theme.palette.primary.main}25`,
                  border: `1px solid ${theme.palette.primary.main}40`,
                },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3rem" },
                  mb: 2,
                }}
              >
                {feature.icon}
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 700,
                  fontSize: { xs: "1.1rem", sm: "1.25rem" },
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  lineHeight: 1.6,
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
              >
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 4, sm: 6 },
          textAlign: "center",
          background:
            theme.palette.mode === "light"
              ? `linear-gradient(135deg, ${theme.palette.secondary.main}20 0%, ${theme.palette.primary.main}10 100%)`
              : `linear-gradient(135deg, ${theme.palette.secondary.main}15 0%, ${theme.palette.primary.main}10 100%)`,
          border: `2px solid ${theme.palette.primary.main}20`,
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 700,
            fontSize: { xs: "1.3rem", sm: "1.5rem" },
          }}
        >
          ¿Listo para transformar tu código?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: theme.palette.text.secondary,
            maxWidth: 500,
            mx: "auto",
            fontSize: { xs: "0.9rem", sm: "1rem" },
            px: { xs: 2, sm: 0 },
          }}
        >
          Explora nuestra agenda detallada y accede a todo el material
          complementario para maximizar tu aprendizaje.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            component={Link}
            to="/agenda"
            sx={{
              minWidth: { xs: "100%", sm: 150 },
              maxWidth: { xs: 300, sm: "none" },
            }}
          >
            Ver Agenda
          </Button>
          <Button
            variant="outlined"
            component={Link}
            to="/material"
            sx={{
              minWidth: { xs: "100%", sm: 150 },
              maxWidth: { xs: 300, sm: "none" },
            }}
          >
            Material
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
