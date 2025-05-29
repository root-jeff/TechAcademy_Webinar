import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Paper,
  Chip,
  ListItemIcon,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";

export default function Agenda() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const agendaItems = [
    {
      time: "5 min",
      title: "Introducción: Qué veremos y por qué importa",
      description: "Contexto del webinar y objetivos de aprendizaje",
      icon: "🎯",
    },
    {
      time: "15 min",
      title: "Estructura de código en Flask y Angular",
      description:
        "Organización de proyectos, patrones arquitectónicos y mejores prácticas",
      icon: "🏗️",
    },
    {
      time: "15 min",
      title: "Buenas prácticas de documentación y entornos",
      description:
        "Swagger/OpenAPI, README efectivos y configuración de entornos",
      icon: "📚",
    },
    {
      time: "15 min",
      title: "Pruebas unitarias en Python/Flask y Angular",
      description: "Pytest, Jest, cobertura de código y TDD básico",
      icon: "🧪",
    },
    {
      time: "5 min",
      title: "Casos reales y ejemplos prácticos",
      description: "Demostración en vivo y refactoring de código real",
      icon: "💼",
    },
    {
      time: "5 min",
      title: "Preguntas, respuestas y cierre",
      description: "Sesión interactiva y recursos adicionales",
      icon: "❓",
    },
  ];

  const totalTime = agendaItems.reduce(
    (acc, item) => acc + parseInt(item.time),
    0
  );

  const getMainBackground = () => {
    return theme.palette.mode === "light"
      ? "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(245,230,248,0.3) 100%)"
      : "linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(130,0,124,0.2) 100%)";
  };

  const getFooterBackground = () => {
    return theme.palette.mode === "light"
      ? "linear-gradient(135deg, rgba(255,204,0,0.1) 0%, rgba(130,0,124,0.05) 100%)"
      : "linear-gradient(135deg, rgba(255,204,0,0.05) 0%, rgba(130,0,124,0.1) 100%)";
  };

  const getBorderColor = () => {
    return theme.palette.mode === "light"
      ? "rgba(130,0,124,0.1)"
      : "rgba(130,0,124,0.3)";
  };

  const getHoverBackground = () => {
    return theme.palette.mode === "light"
      ? "rgba(130,0,124,0.05)"
      : "rgba(130,0,124,0.1)";
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
          Agenda del Webinar
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.secondary,
            mb: 4,
            maxWidth: 600,
            mx: "auto",
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
            px: { xs: 1, sm: 0 },
          }}
        >
          Un recorrido completo para transformar tu desarrollo backend
        </Typography>

        {/* Stats */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 2, md: 3 },
            justifyContent: "center",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
          }}
        >
          <Chip
            icon={
              <AccessTimeIcon
                sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
              />
            }
            label={`${totalTime} minutos total`}
            sx={{
              bgcolor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
              fontWeight: 600,
              fontSize: { xs: "0.8rem", md: "0.9rem" },
              px: { xs: 1.5, md: 2 },
              py: { xs: 0.5, md: 1 },
              height: { xs: 32, md: 36 },
            }}
          />
          <Chip
            icon={
              <PersonIcon sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }} />
            }
            label="6 secciones interactivas"
            sx={{
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(130,0,124,0.1)"
                  : "rgba(130,0,124,0.2)",
              color: theme.palette.primary.main,
              fontWeight: 600,
              fontSize: { xs: "0.8rem", md: "0.9rem" },
              px: { xs: 1.5, md: 2 },
              py: { xs: 0.5, md: 1 },
              height: { xs: 32, md: 36 },
            }}
          />
        </Box>
      </Box>

      {/* Agenda List */}
      <Paper
        elevation={0}
        sx={{
          background: getMainBackground(),
          border: `1px solid ${getBorderColor()}`,
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <List sx={{ p: 0 }}>
          {agendaItems.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                py: { xs: 2, md: 3 },
                px: { xs: 2, md: 4 },
                borderBottom:
                  index < agendaItems.length - 1
                    ? `1px solid ${getBorderColor()}`
                    : "none",
                transition: "all 0.3s ease-in-out",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "flex-start", sm: "center" },
                gap: { xs: 2, sm: 0 },
                "&:hover": {
                  bgcolor: getHoverBackground(),
                  transform: isMobile ? "translateX(4px)" : "translateX(8px)",
                  "& .agenda-icon": {
                    transform: "scale(1.2) rotate(5deg)",
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: { xs: "auto", sm: 80 },
                  flexDirection: { xs: "row", sm: "column" },
                  alignItems: { xs: "center", sm: "flex-start" },
                  gap: { xs: 2, sm: 1 },
                  width: { xs: "100%", sm: "auto" },
                  justifyContent: { xs: "flex-start", sm: "center" },
                }}
              >
                <Box
                  className="agenda-icon"
                  sx={{
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    transition: "transform 0.3s ease-in-out",
                    mr: { xs: 0, sm: 2 },
                  }}
                >
                  {item.icon}
                </Box>
                <Chip
                  size="small"
                  label={item.time}
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    fontWeight: 600,
                    fontSize: { xs: "0.7rem", md: "0.75rem" },
                    height: { xs: 24, md: 28 },
                  }}
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  flex: 1,
                  mt: { xs: 0, sm: 0 },
                }}
                primary={
                  <Typography
                    variant="h6"
                    sx={{
                      color: theme.palette.primary.main,
                      fontWeight: 700,
                      mb: 1,
                      fontSize: { xs: "1.1rem", md: "1.2rem" },
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.6,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  >
                    {item.description}
                  </Typography>
                }
              />
              <Box
                sx={{
                  ml: { xs: 0, sm: 2 },
                  alignSelf: { xs: "flex-end", sm: "center" },
                  mt: { xs: 1, sm: 0 },
                }}
              >
                <CheckCircleIcon
                  sx={{
                    color: theme.palette.secondary.main,
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                  }}
                />
              </Box>
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* Footer Note */}
      <Paper
        elevation={0}
        sx={{
          mt: { xs: 3, md: 4 },
          p: { xs: 3, md: 4 },
          textAlign: "center",
          background: getFooterBackground(),
          border: `2px solid ${theme.palette.secondary.main}${
            theme.palette.mode === "light" ? "30" : "40"
          }`,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: "1.1rem", md: "1.25rem" },
          }}
        >
          💡 Nota Importante
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
            fontSize: { xs: "0.9rem", md: "1rem" },
            maxWidth: 600,
            mx: "auto",
          }}
        >
          Cada sección incluye ejemplos prácticos y tiempo para preguntas.
          ¡Prepara tu entorno de desarrollo para seguir los ejercicios en vivo!
        </Typography>
      </Paper>
    </Container>
  );
}
