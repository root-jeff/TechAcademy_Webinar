import {
  Container,
  Typography,
  Link as MuiLink,
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import ApiIcon from "@mui/icons-material/Api";
import SchoolIcon from "@mui/icons-material/School";
import LaunchIcon from "@mui/icons-material/Launch";

export default function Material() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const materials = [
    {
      icon: (
        <GitHubIcon
          sx={{
            fontSize: { xs: "2.5rem", md: "3rem" },
            color: theme.palette.primary.main,
          }}
        />
      ),
      title: "Repositorio con código de ejemplo",
      description:
        "Código fuente completo del webinar con ejemplos de Flask y Angular estructurados profesionalmente.",
      url: "https://github.com/tuusuario/webinar-backend-colaborativo",
      type: "Código",
      color: theme.palette.primary.main,
    },
    {
      icon: (
        <SchoolIcon
          sx={{
            fontSize: { xs: "2.5rem", md: "3rem" },
            color: theme.palette.secondary.main,
          }}
        />
      ),
      title: "Guía de pruebas unitarias con Pytest",
      description:
        "Documentación oficial completa para implementar testing robusto en Python y Flask.",
      url: "https://docs.pytest.org/en/stable/",
      type: "Documentación",
      color: theme.palette.secondary.main,
    },
    {
      icon: (
        <ApiIcon
          sx={{
            fontSize: { xs: "2.5rem", md: "3rem" },
            color: theme.palette.primary.light,
          }}
        />
      ),
      title: "Documentación Swagger/OpenAPI",
      description:
        "Especificación oficial para crear APIs bien documentadas y fáciles de consumir.",
      url: "https://swagger.io/specification/",
      type: "Especificación",
      color: theme.palette.primary.light,
    },
  ];

  const additionalResources = [
    {
      title: "Flask Best Practices",
      url: "https://flask.palletsprojects.com/",
      icon: "🔥",
    },
    {
      title: "Angular Style Guide",
      url: "https://angular.io/guide/styleguide",
      icon: "🅰️",
    },
    {
      title: "Clean Code Principles",
      url: "https://clean-code-developer.com/",
      icon: "✨",
    },
    {
      title: "Git Workflow Guide",
      url: "https://www.atlassian.com/git/tutorials/comparing-workflows",
      icon: "🌳",
    },
  ];

  const getCardBackground = () => {
    return theme.palette.mode === "light"
      ? "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(245,230,248,0.3) 100%)"
      : "linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(130,0,124,0.2) 100%)";
  };

  const getSectionBackground = () => {
    return theme.palette.mode === "light"
      ? "linear-gradient(135deg, rgba(255,204,0,0.1) 0%, rgba(130,0,124,0.05) 100%)"
      : "linear-gradient(135deg, rgba(255,204,0,0.05) 0%, rgba(130,0,124,0.1) 100%)";
  };

  const getCtaBackground = () => {
    return theme.palette.mode === "light"
      ? "linear-gradient(135deg, #82007C 0%, #D24AE0 100%)"
      : "linear-gradient(135deg, #D24AE0 0%, #82007C 100%)";
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ mt: { xs: 2, md: 4 }, mb: { xs: 4, md: 6 }, px: { xs: 2, sm: 3 } }}
    >
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
        <Typography
          variant={isMobile ? "h4" : "h3"}
          component="h1"
          gutterBottom
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 800,
            mb: 2,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          }}
        >
          Material Complementario
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.secondary,
            mb: 4,
            maxWidth: 700,
            mx: "auto",
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
            px: { xs: 1, sm: 0 },
          }}
        >
          Recursos esenciales para profundizar en los conceptos del webinar y
          llevar tu desarrollo al siguiente nivel
        </Typography>
      </Box>

      {/* Main Materials */}
      <Grid container spacing={{ xs: 2, md: 4 }} sx={{ mb: { xs: 4, md: 6 } }}>
        {materials.map((material, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                background: getCardBackground(),
                border: `2px solid ${material.color}${
                  theme.palette.mode === "light" ? "20" : "40"
                }`,
                borderRadius: 3,
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
                "&:hover": {
                  transform: isMobile ? "translateY(-4px)" : "translateY(-8px)",
                  boxShadow: `0 ${isMobile ? "10px 20px" : "20px 40px"} ${
                    material.color
                  }30`,
                  border: `2px solid ${material.color}${
                    theme.palette.mode === "light" ? "40" : "60"
                  }`,
                  "& .material-icon": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
              }}
              onClick={() => window.open(material.url, "_blank")}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: "center" }}>
                <Box
                  className="material-icon"
                  sx={{
                    mb: { xs: 2, md: 3 },
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  {material.icon}
                </Box>
                <Chip
                  label={material.type}
                  size={isSmall ? "small" : "medium"}
                  sx={{
                    bgcolor: material.color,
                    color:
                      theme.palette.mode === "light"
                        ? "white"
                        : theme.palette.background.paper,
                    fontWeight: 600,
                    mb: 2,
                  }}
                />
                <Typography
                  variant={isMobile ? "h6" : "h5"}
                  gutterBottom
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
                  }}
                >
                  {material.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                    mb: 3,
                    fontSize: { xs: "0.875rem", md: "1rem" },
                  }}
                >
                  {material.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <MuiLink
                    href={material.url}
                    target="_blank"
                    sx={{
                      color: material.color,
                      fontWeight: 600,
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      fontSize: { xs: "0.875rem", md: "1rem" },
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Acceder al recurso
                    <LaunchIcon
                      sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
                    />
                  </MuiLink>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Additional Resources */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 4 },
          background: getSectionBackground(),
          border: `2px solid ${theme.palette.secondary.main}${
            theme.palette.mode === "light" ? "30" : "40"
          }`,
          borderRadius: 3,
          mb: { xs: 3, md: 4 },
        }}
      >
        <Typography
          variant={isMobile ? "h6" : "h5"}
          gutterBottom
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 700,
            textAlign: "center",
            mb: { xs: 3, md: 4 },
            fontSize: { xs: "1.25rem", md: "1.5rem" },
          }}
        >
          📖 Recursos Adicionales Recomendados
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {additionalResources.map((resource, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2, md: 3 },
                  background:
                    theme.palette.mode === "light"
                      ? "rgba(255,255,255,0.7)"
                      : "rgba(30,30,30,0.7)",
                  border: `1px solid ${theme.palette.primary.main}${
                    theme.palette.mode === "light" ? "10" : "30"
                  }`,
                  borderRadius: 2,
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    transform: isMobile ? "translateX(4px)" : "translateX(8px)",
                    border: `1px solid ${theme.palette.primary.main}${
                      theme.palette.mode === "light" ? "30" : "50"
                    }`,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: 1.5, md: 2 },
                  }}
                >
                  <Typography
                    sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
                  >
                    {resource.icon}
                  </Typography>
                  <MuiLink
                    href={resource.url}
                    target="_blank"
                    sx={{
                      color: theme.palette.primary.main,
                      fontWeight: 600,
                      textDecoration: "none",
                      flex: 1,
                      fontSize: { xs: "0.875rem", md: "1rem" },
                      "&:hover": {
                        color: theme.palette.primary.light,
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {resource.title}
                  </MuiLink>
                  <LaunchIcon
                    sx={{
                      fontSize: { xs: "0.875rem", md: "1rem" },
                      color: theme.palette.text.secondary,
                    }}
                  />
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Footer CTA */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 4, md: 6 },
          textAlign: "center",
          background: getCtaBackground(),
          borderRadius: 3,
          color: "white",
        }}
      >
        <DescriptionIcon
          sx={{
            fontSize: { xs: "3rem", md: "4rem" },
            mb: 2,
            opacity: 0.9,
          }}
        />
        <Typography
          variant={isMobile ? "h6" : "h5"}
          gutterBottom
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.25rem", md: "1.5rem" },
          }}
        >
          ¿Necesitas más recursos?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            opacity: 0.9,
            maxWidth: 500,
            mx: "auto",
            fontSize: { xs: "0.875rem", md: "1rem" },
            px: { xs: 1, sm: 0 },
          }}
        >
          Todos estos materiales se actualizan regularmente. Guarda esta página
          en favoritos para acceder a las últimas versiones.
        </Typography>
      </Paper>
    </Container>
  );
}
