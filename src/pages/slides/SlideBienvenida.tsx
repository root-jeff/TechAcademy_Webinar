import React from "react";
import {
  Typography,
  Paper,
  Box,
  Button,
  Tooltip,
  Grid,
  Card,
  CardContent,
  Chip,
  Container,
  Fade,
  Grow,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Code,
  Groups,
  RocketLaunch,
  AutoAwesome,
  Engineering,
  Description,
  BugReport,
  Timeline,
  Star,
  TrendingUp,
  Speed,
} from "@mui/icons-material";

export default function SlideBienvenida() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const topicsList = [
    {
      icon: <Groups sx={{ fontSize: { xs: 28, md: 32 } }} />,
      title: "Herramientas para colaborar eficientemente",
      description: "Git, workflows y comunicación en equipo",
      color: theme.palette.primary.main,
      gradient: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.primary.light}20)`,
    },
    {
      icon: <Engineering sx={{ fontSize: { xs: 28, md: 32 } }} />,
      title: "Estructura de proyectos backend/frontend",
      description: "Arquitecturas escalables y mantenibles",
      color: theme.palette.secondary.main,
      gradient: `linear-gradient(135deg, ${theme.palette.secondary.main}20, ${theme.palette.secondary.light}20)`,
    },
    {
      icon: <Description sx={{ fontSize: { xs: 28, md: 32 } }} />,
      title: "Buenas prácticas de documentación",
      description: "Código autodescriptivo y APIs claras",
      color: theme.palette.primary.light,
      gradient: `linear-gradient(135deg, ${theme.palette.primary.light}20, ${theme.palette.primary.main}20)`,
    },
    {
      icon: <BugReport sx={{ fontSize: { xs: 28, md: 32 } }} />,
      title: "Pruebas automatizadas y cobertura",
      description: "Testing que realmente aporta valor",
      color: theme.palette.secondary.dark,
      gradient: `linear-gradient(135deg, ${theme.palette.secondary.dark}20, ${theme.palette.secondary.main}20)`,
    },
    {
      icon: <Timeline sx={{ fontSize: { xs: 28, md: 32 } }} />,
      title: "Automatización con CI/CD",
      description: "Despliegues seguros y automatizados",
      color: theme.palette.primary.dark,
      gradient: `linear-gradient(135deg, ${theme.palette.primary.dark}20, ${theme.palette.primary.light}20)`,
    },
  ];

  const benefits = [
    { icon: <Speed />, text: "Desarrollo más rápido" },
    { icon: <Star />, text: "Código de calidad" },
    { icon: <TrendingUp />, text: "Escalabilidad garantizada" },
  ];

  return (
    <Container sx={{ width: "100%", position: "relative", zIndex: 1 }}>
      <Grid container spacing={{ xs: 3, md: 4 }}>
        {/* Header Section */}
        <Grid item xs={12}>
          <Fade in timeout={1000}>
            <Box textAlign="center" mb={{ xs: 3, md: 6 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: { xs: 1, md: 2 },
                  mb: { xs: 2, md: 3 },
                  flexWrap: "wrap",
                }}
              >
                <RocketLaunch
                  sx={{
                    fontSize: { xs: 40, md: 56 },
                    color: theme.palette.secondary.main,
                    animation: "bounce 2s infinite",
                    "@keyframes bounce": {
                      "0%, 20%, 50%, 80%, 100%": {
                        transform: "translateY(0)",
                      },
                      "40%": { transform: "translateY(-10px)" },
                      "60%": { transform: "translateY(-5px)" },
                    },
                  }}
                />
                <Typography
                  variant={isMobile ? "h4" : "h3"}
                  component="h1"
                  gutterBottom
                  sx={{
                    fontWeight: 800,
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textAlign: "center",
                    lineHeight: 1.2,
                  }}
                >
                  ¡Comienza tu evolución como desarrollador!
                </Typography>
                <Code
                  sx={{
                    fontSize: { xs: 40, md: 56 },
                    color: theme.palette.secondary.main,
                    animation: "pulse 2s infinite",
                    "@keyframes pulse": {
                      "0%": { transform: "scale(1)" },
                      "50%": { transform: "scale(1.05)" },
                      "100%": { transform: "scale(1)" },
                    },
                  }}
                />
              </Box>

              <Typography
                variant={isMobile ? "body1" : "h6"}
                sx={{
                  color: theme.palette.text.secondary,
                  maxWidth: "900px",
                  mx: "auto",
                  lineHeight: 1.6,
                  mb: 3,
                }}
              >
                Transforma tu manera de programar: del código caótico a
                soluciones elegantes y profesionales. Descubre cómo los mejores
                desarrolladores construyen software que perdura y escala.
              </Typography>

              {/* Benefits Pills */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {benefits.map((benefit, index) => (
                  <Grow in timeout={1000 + index * 200} key={index}>
                    <Chip
                      icon={React.cloneElement(benefit.icon, {
                        sx: { color: theme.palette.primary.contrastText },
                      })}
                      label={benefit.text}
                      sx={{
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                        color: theme.palette.primary.contrastText,
                        fontWeight: 600,
                        px: 1,
                        "&:hover": {
                          transform: "scale(1.05)",
                          boxShadow: theme.shadows[8],
                        },
                        transition: "all 0.3s ease",
                      }}
                    />
                  </Grow>
                ))}
              </Box>
            </Box>
          </Fade>
        </Grid>

        {/* Motivation and Topics Overview */}
        <Grid item xs={12} lg={6}>
          <Grow in timeout={1200}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                height: "100%",
                background: theme.palette.background.paper,
                border: `2px solid ${theme.palette.primary.main}20`,
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "4px",
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                },
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}
              >
                <AutoAwesome
                  sx={{ color: theme.palette.secondary.main, fontSize: 32 }}
                />
                <Typography
                  variant={isMobile ? "h6" : "h5"}
                  sx={{ fontWeight: 700, color: theme.palette.text.primary }}
                >
                  ¿Por qué este webinar?
                </Typography>
              </Box>

              <Typography
                paragraph
                sx={{ color: theme.palette.text.secondary, mb: 3 }}
              >
                Sabemos que has enfrentado proyectos donde cada línea de código
                se siente como caminar en un campo minado. Funciones
                interminables, nombres crípticos, y esa sensación de que todo se
                puede romper con un cambio.
              </Typography>

              <Box
                sx={{
                  p: 3,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.primary.main}30`,
                }}
              >
                <Typography
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    fontSize: "1.1rem",
                  }}
                >
                  <strong style={{ color: theme.palette.primary.main }}>
                    Hoy cambiamos esa historia.
                  </strong>{" "}
                  Te enseñaremos a crear código que tu yo del futuro te
                  agradecerá, y que tus compañeros de equipo entenderán sin
                  necesidad de arqueología digital.
                </Typography>
              </Box>
            </Paper>
          </Grow>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Grow in timeout={1400}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                height: "100%",
                background: theme.palette.background.paper,
                border: `2px solid ${theme.palette.secondary.main}20`,
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "4px",
                  background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                },
              }}
            >
              <Typography
                variant={isMobile ? "h6" : "h5"}
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: theme.palette.text.primary,
                }}
              >
                🎯 Lo que dominarás hoy:
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 3 }}>
                {[
                  "Colaboración",
                  "Arquitectura",
                  "Documentación",
                  "Testing",
                  "CI/CD",
                ].map((topic, index) => (
                  <Grow in timeout={1500 + index * 100} key={index}>
                    <Chip
                      label={topic}
                      sx={{
                        background: `linear-gradient(45deg, ${theme.palette.secondary.main}20, ${theme.palette.secondary.light}20)`,
                        color: theme.palette.text.primary,
                        fontWeight: 600,
                        border: `1px solid ${theme.palette.secondary.main}40`,
                        "&:hover": {
                          background: `linear-gradient(45deg, ${theme.palette.secondary.main}30, ${theme.palette.secondary.light}30)`,
                          transform: "translateY(-2px)",
                          boxShadow: theme.shadows[4],
                        },
                        transition: "all 0.3s ease",
                      }}
                    />
                  </Grow>
                ))}
              </Box>

              <Box
                sx={{
                  p: 3,
                  background: `linear-gradient(135deg, ${theme.palette.secondary.main}10, ${theme.palette.primary.main}10)`,
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.secondary.main}30`,
                }}
              >
                <Typography
                  sx={{
                    color: theme.palette.text.secondary,
                    fontStyle: "italic",
                    fontSize: "0.95rem",
                  }}
                >
                  "Cada experto fue una vez un principiante. Cada profesional
                  fue una vez un amateur. Cada icono fue una vez un
                  desconocido."
                </Typography>
              </Box>
            </Paper>
          </Grow>
        </Grid>

        {/* Detailed Topics */}
        <Grid item xs={12}>
          <Typography
            variant={isMobile ? "h5" : "h4"}
            textAlign="center"
            sx={{
              mb: { xs: 3, md: 5 },
              fontWeight: 700,
              color: theme.palette.text.primary,
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -10,
                left: "50%",
                transform: "translateX(-50%)",
                width: 60,
                height: 4,
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: 2,
              },
            }}
          >
            🚀 Tu hoja de ruta hacia la excelencia
          </Typography>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {topicsList.map((topic, index) => (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <Grow in timeout={1600 + index * 200}>
                  <Card
                    sx={{
                      height: "100%",
                      background: topic.gradient,
                      border: `2px solid ${topic.color}30`,
                      backdropFilter: "blur(10px)",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateY(-8px) scale(1.02)",
                        boxShadow: `0 20px 40px ${topic.color}20`,
                        border: `2px solid ${topic.color}60`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 2,
                          mb: 2,
                        }}
                      >
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: 2,
                            background: `${topic.color}20`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {React.cloneElement(topic.icon, {
                            sx: {
                              color: topic.color,
                              ...topic.icon.props.sx,
                            },
                          })}
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            fontSize: { xs: "1rem", md: "1.1rem" },
                            color: theme.palette.text.primary,
                            lineHeight: 1.3,
                            flex: 1,
                          }}
                        >
                          {topic.title}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          lineHeight: 1.5,
                          fontSize: "0.9rem",
                        }}
                      >
                        {topic.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Call to Action */}
        <Grid item xs={12}>
          <Fade in timeout={2000}>
            <Box textAlign="center" mt={{ xs: 4, md: 6 }}>
              <Tooltip
                title="El primer paso hacia tu transformación profesional está a un clic de distancia"
                arrow
                placement="top"
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<RocketLaunch />}
                  sx={{
                    px: { xs: 4, md: 8 },
                    py: { xs: 1.5, md: 2 },
                    fontSize: { xs: "1rem", md: "1.3rem" },
                    fontWeight: 700,
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    color: theme.palette.primary.contrastText,
                    borderRadius: 4,
                    textTransform: "none",
                    boxShadow: `0 8px 32px ${theme.palette.primary.main}40`,
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: "-100%",
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                      transition: "left 0.6s",
                    },
                    "&:hover": {
                      background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                      transform: "translateY(-4px) scale(1.05)",
                      boxShadow: `0 16px 48px ${theme.palette.primary.main}50`,
                      "&::before": {
                        left: "100%",
                      },
                    },
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  ¡Comenzar mi transformación!
                </Button>
              </Tooltip>

              {/* Quote */}
              <Paper
                elevation={0}
                sx={{
                  mt: { xs: 4, md: 6 },
                  p: { xs: 3, md: 4 },
                  maxWidth: "800px",
                  mx: "auto",
                  background: theme.palette.background.paper,
                  border: `1px solid ${theme.palette.divider}`,
                  position: "relative",
                  "&::before": {
                    content: '"💡"',
                    position: "absolute",
                    top: -15,
                    left: 30,
                    fontSize: "2rem",
                    background: theme.palette.background.paper,
                    px: 1,
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontStyle: "italic",
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                    fontSize: { xs: "0.95rem", md: "1rem" },
                  }}
                >
                  "El código limpio no se escribe siguiendo un conjunto de
                  reglas. No se convierte en limpio aplicando un puñado de
                  principios. Se convierte en limpio mediante el trabajo duro y
                  la experiencia."
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    textAlign: "right",
                    mt: 2,
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                  }}
                >
                  - Robert C. Martin
                </Typography>
              </Paper>
            </Box>
          </Fade>
        </Grid>
      </Grid>
    </Container>
  );
}
