import React, { useState } from "react";
import {
  Typography,
  Button,
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Chip,
  Stack,
  Link,
  Divider,
  Card,
  CardContent,
  Grid,
  useTheme,
  alpha,
} from "@mui/material";
import {
  Celebration,
  School,
  AutoAwesome,
  ExpandMore,
  CheckCircle,
  Home,
  Download,
  Code,
  Description,
  MenuBook,
  PlayCircle,
  Launch,
  EmojiEvents,
  Lightbulb,
  CalendarMonth,
} from "@mui/icons-material";

export default function SlideDespedida() {
  const [expanded, setExpanded] = useState<any>(false);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const handleAccordionChange =
    (panel: any) => (_event: any, isExpanded: any) => {
      setExpanded(isExpanded ? panel : false);
    };

  const recursos = [
    {
      categoria: "Documentación Oficial",
      items: [
        {
          nombre: "Angular Documentation",
          url: "https://angular.io/docs",
          icon: <Code />,
        },
        {
          nombre: "FastAPI Documentation",
          url: "https://fastapi.tiangolo.com/",
          icon: <Code />,
        },
        {
          nombre: "Pytest Documentation",
          url: "https://docs.pytest.org/",
          icon: <Code />,
        },
      ],
    },
    {
      categoria: "Plantillas y Templates",
      items: [
        { nombre: "README Template", url: "#", icon: <Description /> },
        { nombre: "Swagger/OpenAPI Template", url: "#", icon: <Description /> },
      ],
    },
    {
      categoria: "Recursos Adicionales",
      items: [
        { nombre: "Clean Code - Robert Martin", url: "#", icon: <MenuBook /> },
        { nombre: "Testing Best Practices", url: "#", icon: <PlayCircle /> },
        { nombre: "Git Workflow Guide", url: "#", icon: <PlayCircle /> },
      ],
    },
  ];

  const aprendizajes = [
    "Usar bien las herramientas del equipo",
    "Estructurar el código correctamente",
    "Documentar con intención",
    "Escribir pruebas útiles",
    "Automatizar tu flujo de trabajo",
  ];

  return (
    <Box
      sx={{

        mx: "auto",
      }}
    >
      {/* Header principal con gradiente personalizado */}
      <Paper
        elevation={6}
        sx={{
          p: { xs: 3, sm: 4 },
          mb: 4,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 50%, ${theme.palette.primary.main} 100%)`,
          color: theme.palette.primary.contrastText,
          textAlign: "center",
          borderRadius: 3,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(45deg, ${alpha(
              theme.palette.secondary.main,
              0.1
            )} 0%, transparent 50%)`,
            pointerEvents: "none",
          },
        }}
      >
        <Box sx={{ mb: 2, position: "relative", zIndex: 1 }}>
          <EmojiEvents
            sx={{
              fontSize: { xs: 48, sm: 64 },
              mb: 2,
              color: theme.palette.secondary.main,
              animation: "bounce 2s infinite",
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
            }}
          />
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: "bold",
              mb: 1,
              fontSize: { xs: "2rem", sm: "3rem" },
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            ¡Esto apenas comienza!
          </Typography>
          <Typography
            variant="h6"
            sx={{
              opacity: 0.95,
              fontSize: { xs: "1rem", sm: "1.25rem" },
              textShadow: "0 1px 2px rgba(0,0,0,0.2)",
            }}
          >
            Gracias por participar en XtrimUP Tech Academy
          </Typography>
        </Box>
      </Paper>

      {/* Sección de aprendizajes */}
      <Card
        elevation={3}
        sx={{
          mb: 4,
          backgroundColor: theme.palette.background.paper,
          backdropFilter: "blur(10px)",
        }}
      >
        <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 3,
              flexWrap: "wrap",
            }}
          >
            <School
              sx={{
                mr: 2,
                color: theme.palette.primary.main,
                fontSize: { xs: 28, sm: 32 },
                mb: { xs: 1, sm: 0 },
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: theme.palette.text.primary,
                fontSize: { xs: "1.5rem", sm: "2.125rem" },
                lineHeight: 1.2,
              }}
            >
              Lo más importante que aprendimos
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {aprendizajes.map((aprendizaje, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 2.5,
                    bgcolor: alpha(theme.palette.primary.main, 0.05),
                    border: "2px solid",
                    borderColor: alpha(theme.palette.primary.main, 0.2),
                    borderRadius: 2,
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      transform: "translateY(-4px)",
                      boxShadow: `0 8px 25px ${alpha(
                        theme.palette.primary.main,
                        0.25
                      )}`,
                      borderColor: theme.palette.primary.main,
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CheckCircle
                      sx={{
                        color: theme.palette.primary.main,
                        mr: 2,
                        fontSize: { xs: 20, sm: 24 },
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 500,
                        color: theme.palette.text.primary,
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                      }}
                    >
                      {aprendizaje}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* Mensaje motivacional */}
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, sm: 4 },
          mb: 4,
          textAlign: "center",
          bgcolor: alpha(theme.palette.secondary.main, 0.1),
          border: "2px solid",
          borderColor: alpha(theme.palette.secondary.main, 0.3),
          borderRadius: 3,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at center, ${alpha(
              theme.palette.secondary.main,
              0.1
            )} 0%, transparent 70%)`,
            pointerEvents: "none",
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <AutoAwesome
            sx={{
              fontSize: { xs: 32, sm: 40 },
              color: theme.palette.primary.main,
              mb: 2,
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
            }}
          />
          <Typography
            variant="h5"
            sx={{
              fontStyle: "italic",
              color: theme.palette.primary.main,
              mb: 2,
              fontWeight: 600,
              fontSize: { xs: "1.25rem", sm: "1.5rem" },
              textShadow: `0 1px 2px ${alpha(theme.palette.primary.main, 0.2)}`,
            }}
          >
            "La mejor forma de aprender es aplicar lo aprendido"
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            Lleva estos conocimientos a tu día a día y compártelos con tu equipo
          </Typography>
        </Box>
      </Paper>

      {/* Accordion de recursos */}
      <Accordion
        expanded={expanded === "recursos"}
        onChange={handleAccordionChange("recursos")}
        sx={{
          mb: 4,
          borderRadius: 2,
          backgroundColor: theme.palette.background.paper,
          "&:before": {
            display: "none",
          },
        }}
        elevation={3}
      >
        <AccordionSummary
          expandIcon={<ExpandMore sx={{ color: theme.palette.primary.main }} />}
          sx={{
            bgcolor: alpha(theme.palette.primary.main, 0.05),
            "&:hover": {
              bgcolor: alpha(theme.palette.primary.main, 0.1),
            },
            borderRadius: expanded === "recursos" ? "16px 16px 0 0" : "16px",
            minHeight: { xs: 48, sm: 56 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              fontWeight: 600,
              color: theme.palette.text.primary,
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            <MenuBook
              sx={{
                mr: 2,
                color: theme.palette.primary.main,
                fontSize: { xs: 20, sm: 24 },
              }}
            />
            Recursos adicionales para continuar
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: { xs: 2, sm: 3 } }}>
          {recursos.map((categoria, index) => (
            <Box key={index} sx={{ mb: index < recursos.length - 1 ? 3 : 0 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  color: theme.palette.text.primary,
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                }}
              >
                {categoria.categoria}
              </Typography>
              <List dense>
                {categoria.items.map((item, itemIndex) => (
                  <ListItem
                    key={itemIndex}
                    sx={{
                      py: 1.5,
                      px: 2,
                      borderRadius: 2,
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        bgcolor: alpha(theme.palette.primary.main, 0.08),
                        transform: "translateX(8px)",
                        boxShadow: `0 4px 12px ${alpha(
                          theme.palette.primary.main,
                          0.15
                        )}`,
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      {React.cloneElement(item.icon, {
                        sx: {
                          color: theme.palette.primary.main,
                          fontSize: { xs: 18, sm: 20 },
                        },
                      })}
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Link
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            color: theme.palette.primary.main,
                            fontWeight: 600,
                            fontSize: { xs: "0.9rem", sm: "1rem" },
                            transition: "all 0.2s ease-in-out",
                            "&:hover": {
                              color: theme.palette.primary.light,
                              textDecoration: "underline",
                            },
                          }}
                        >
                          {item.nombre}
                          <Launch
                            sx={{ fontSize: { xs: 14, sm: 16 }, ml: 1 }}
                          />
                        </Link>
                      }
                    />
                  </ListItem>
                ))}
              </List>
              {index < recursos.length - 1 && (
                <Divider
                  sx={{
                    my: 2,
                    borderColor: alpha(theme.palette.primary.main, 0.2),
                  }}
                />
              )}
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>

      {/* Botones de acción */}
      <Stack direction={{ xs: "column", sm: "row" }} spacing={3} sx={{ mb: 4 }}>
        <Button
          variant="contained"
          size="large"
          startIcon={<Home />}
          sx={{
            flex: 1,
            py: { xs: 1.5, sm: 2 },
            fontSize: { xs: "1rem", sm: "1.1rem" },
            fontWeight: 600,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
              boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.4)}`,
              transform: "translateY(-2px)",
            },
          }}
        >
          Volver al inicio
        </Button>
        <Tooltip
          title="Descarga todos los recursos y ejemplos del taller"
          placement="top"
        >
          <Button
            variant="outlined"
            size="large"
            startIcon={<Download />}
            sx={{
              flex: 1,
              py: { xs: 1.5, sm: 2 },
              fontSize: { xs: "1rem", sm: "1.1rem" },
              fontWeight: 600,
              borderWidth: 2,
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
              "&:hover": {
                borderWidth: 2,
                backgroundColor: alpha(theme.palette.primary.main, 0.08),
                borderColor: theme.palette.primary.dark,
                color: theme.palette.primary.dark,
                boxShadow: `0 8px 25px ${alpha(
                  theme.palette.primary.main,
                  0.25
                )}`,
                transform: "translateY(-2px)",
              },
            }}
          >
            Descargar guía completa
          </Button>
        </Tooltip>
      </Stack>

      {/* Próximo webinar */}
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Chip
          icon={
            <CalendarMonth
              sx={{ color: theme.palette.secondary.contrastText }}
            />
          }
          label="Esperando el próximo webinar"
          sx={{
            px: 2,
            py: 0.5,
            fontSize: { xs: "0.8rem", sm: "0.9rem" },
            fontWeight: 500,
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
            border: `2px solid ${alpha(theme.palette.secondary.dark, 0.3)}`,
            "&:hover": {
              backgroundColor: theme.palette.secondary.light,
              boxShadow: `0 4px 12px ${alpha(
                theme.palette.secondary.main,
                0.3
              )}`,
            },
          }}
        />
      </Box>

      {/* Tip final con tooltip */}
      <Paper
        elevation={2}
        sx={{
          p: { xs: 2.5, sm: 3 },
          bgcolor: alpha(theme.palette.primary.main, 0.03),
          textAlign: "center",
          borderRadius: 3,
          border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
        }}
      >
        <Tooltip
          title="Code is communication, not just logic."
          placement="top"
          arrow
        >
          <Box sx={{ cursor: "help", display: "inline-block" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 1,
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <Lightbulb
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: { xs: 20, sm: 24 },
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  fontStyle: "italic",
                  color: theme.palette.text.primary,
                  fontSize: { xs: "0.85rem", sm: "0.875rem" },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Tip final: El código limpio no es solo sobre funcionalidad, es
                sobre comunicación clara entre desarrolladores
              </Typography>
            </Box>
          </Box>
        </Tooltip>
        <Typography
          variant="caption"
          display="block"
          sx={{
            mt: 2,
            color: theme.palette.text.secondary,
            fontSize: { xs: "0.7rem", sm: "0.75rem" },
          }}
        >
          🌱 Mejores prácticas = mejores productos = equipos más felices
        </Typography>
      </Paper>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </Box>
  );
}
