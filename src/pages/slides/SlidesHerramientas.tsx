import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Tooltip,
  Radio,
  RadioGroup,
  FormControlLabel,
  Paper,
  Divider,
  Grid,
  Chip,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const SlideHerramientas = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState("");
  const [quizAnswer, setQuizAnswer] = useState("");
  const [showQuizResult, setShowQuizResult] = useState(false);
  const isDarkMode = theme.palette.mode === "dark";

  const handleAccordionChange =
    (panel: any) => (_event: any, isExpanded: any) => {
      setExpanded(isExpanded ? panel : "");
    };

  const handleQuizSubmit = () => {
    setShowQuizResult(true);
  };

  // Colores adaptativos según el tema
  const getAdaptiveColors = () => ({
    highlightBg:
      theme.palette.mode === "light"
        ? "rgba(130, 0, 124, 0.08)"
        : "rgba(210, 74, 224, 0.12)",

    codeBlockBg: theme.palette.mode === "light" ? "#fafafa" : "#2a2a2a",

    codeBlockBorder: theme.palette.mode === "light" ? "#cccccc" : "#555555",

    successBg: theme.palette.mode === "light" ? "#e8f5e9" : "#1b5e20",

    successText: theme.palette.mode === "light" ? "#2e7d32" : "#4caf50",

    errorBg: theme.palette.mode === "light" ? "#ffebee" : "#b71c1c",

    errorText: theme.palette.mode === "light" ? "#c62828" : "#f44336",

    successBorder: theme.palette.mode === "light" ? "#a5d6a7" : "#2e7d32",

    errorBorder: theme.palette.mode === "light" ? "#ef9a9a" : "#c62828",
  });

  const colors = getAdaptiveColors();

  return (
    <Box
      sx={{
        maxWidth: "1000px",
        margin: "0 auto",
        p: { xs: 2, md: 4 },
      }}
    >
      <Typography variant="h4" align="center" gutterBottom color="primary">
        🛠️ Herramientas para un trabajo en equipo eficiente
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        gutterBottom
      >
        Las herramientas adecuadas no solo optimizan el tiempo, sino que también
        refuerzan la colaboración entre los equipos técnicos.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Accordion
            expanded={expanded === "jira"}
            onChange={handleAccordionChange("jira")}
            sx={{
              "&:before": { display: "none" },
              boxShadow: theme.shadows[2],
              borderRadius: 2,
              "&.Mui-expanded": {
                margin: 0,
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />
              }
              sx={{
                borderRadius: 2,
                "&.Mui-expanded": {
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                },
                backgroundColor: colors.highlightBg,
              }}
            >
              <Typography
                variant="h6"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                📋 Uso correcto de Jira
                <Chip
                  label="Gestión de tareas"
                  color="info"
                  size="small"
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.contrastText,
                    fontWeight: 600,
                  }}
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ backgroundColor: theme.palette.background.paper }}
            >
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon
                      sx={{ color: theme.palette.success?.main || "#4caf50" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Vincula commits con tareas usando el ID de Jira"
                    secondary="Ejemplo: feat(PJT-432): Agrega validación de correo"
                    slotProps={{
                      primary: {
                        sx: {
                          color: theme.palette.text.primary,
                        },
                      },
                      secondary: {
                        sx: {
                          color: theme.palette.text.secondary,
                        },
                      },
                    }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon
                      sx={{ color: theme.palette.success?.main || "#4caf50" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Relaciona PRs con incidencias de Jira"
                    secondary="Usa etiquetas como [PJT-432] y agrega 'Closes PJT-432' para cierre automático"
                    slotProps={{
                      primary: {
                        sx: {
                          color: theme.palette.text.primary,
                        },
                      },
                      secondary: {
                        sx: {
                          color: theme.palette.text.secondary,
                        },
                      },
                    }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <InfoOutlinedIcon
                      sx={{ color: theme.palette.primary.main }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Usa subtareas para dividir entregables complejos"
                    secondary="Mejora la planificación y el seguimiento en sprints"
                    slotProps={{
                      primary: {
                        sx: {
                          color: theme.palette.text.primary,
                        },
                      },
                      secondary: {
                        sx: {
                          color: theme.palette.text.secondary,
                        },
                      },
                    }}
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12}>
          <Accordion
            expanded={expanded === "bitbucket"}
            onChange={handleAccordionChange("bitbucket")}
            sx={{
              "&:before": { display: "none" },
              boxShadow: theme.shadows[2],
              borderRadius: 2,
              "&.Mui-expanded": {
                margin: 0,
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />
              }
              sx={{
                borderRadius: 2,
                "&.Mui-expanded": {
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                },
                backgroundColor: colors.highlightBg,
              }}
            >
              <Typography
                variant="h6"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                🌿 Buen uso de Bitbucket
                <Chip
                  label="Control de versiones"
                  color="success"
                  size="small"
                  sx={{
                    backgroundColor: theme.palette.success?.main || "#4caf50",
                    color: theme.palette.success?.contrastText || "#fff",
                    fontWeight: 600,
                  }}
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ backgroundColor: theme.palette.background.paper }}
            >
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon
                      sx={{ color: theme.palette.success?.main || "#4caf50" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="PRs bien descritos, claros y concisos"
                    secondary="Máximo 400 líneas para facilitar revisión"
                    slotProps={{
                      primary: {
                        sx: {
                          color: theme.palette.text.primary,
                        },
                      },
                      secondary: {
                        sx: {
                          color: theme.palette.text.secondary,
                        },
                      },
                    }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon
                      sx={{ color: theme.palette.success?.main || "#4caf50" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Al menos 2 revisores para PRs críticos"
                    slotProps={{
                      primary: {
                        sx: {
                          color: theme.palette.text.primary,
                        },
                      },
                    }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon
                      sx={{ color: theme.palette.success?.main || "#4caf50" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Protección de ramas main/develop"
                    secondary="Con PR, revisión obligatoria y tests exitosos"
                    slotProps={{
                      primary: {
                        sx: {
                          color: theme.palette.text.primary,
                        },
                      },
                      secondary: {
                        sx: {
                          color: theme.palette.text.secondary,
                        },
                      },
                    }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <InfoOutlinedIcon
                      sx={{ color: theme.palette.primary.main }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Reglas de squash y merge para mantener historial limpio"
                    slotProps={{
                      primary: {
                        sx: {
                          color: theme.palette.text.primary,
                        },
                      },
                    }}
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12}>
          <Accordion
            expanded={expanded === "typing"}
            onChange={handleAccordionChange("typing")}
            sx={{
              "&:before": { display: "none" },
              boxShadow: theme.shadows[2],
              borderRadius: 2,
              "&.Mui-expanded": {
                margin: 0,
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />
              }
              sx={{
                borderRadius: 2,
                "&.Mui-expanded": {
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                },
                backgroundColor: colors.highlightBg,
              }}
            >
              <Typography
                variant="h6"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                💻 Herramientas de Tipado
                <Chip
                  label="Calidad de código"
                  color="warning"
                  size="small"
                  sx={{
                    backgroundColor: theme.palette.warning?.main || "#ff9800",
                    color: theme.palette.warning?.contrastText || "#000",
                    fontWeight: 600,
                  }}
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ backgroundColor: theme.palette.background.paper }}
            >
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon
                      sx={{ color: theme.palette.success?.main || "#4caf50" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="TypeScript en frontend"
                    secondary="Ayuda a detectar errores en tiempo de desarrollo"
                    slotProps={{
                      primary: {
                        sx: {
                          color: theme.palette.text.primary,
                        },
                      },
                      secondary: {
                        sx: {
                          color: theme.palette.text.secondary,
                        },
                      },
                    }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon
                      sx={{ color: theme.palette.success?.main || "#4caf50" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="MyPy en backend Python"
                    secondary="Verifica tipos estáticamente y refuerza la calidad"
                    slotProps={{
                      primary: {
                        sx: {
                          color: theme.palette.text.primary,
                        },
                      },
                      secondary: {
                        sx: {
                          color: theme.palette.text.secondary,
                        },
                      },
                    }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon
                      sx={{ color: theme.palette.success?.main || "#4caf50" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx: {
                          fontWeight: "bold",
                          color: theme.palette.text.primary,
                        },
                      },
                      secondary: {
                        sx: {
                          fontStyle: "italic",
                          color: theme.palette.text.secondary,
                        },
                      },
                    }}
                    primary="Ventajas del tipado fuerte"
                    secondary="Mejor comprensión del código, menos bugs y más mantenibilidad"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <InfoOutlinedIcon
                      sx={{ color: theme.palette.primary.main }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Mejor autocompletado y refactorización segura en editores"
                    slotProps={{
                      primary: {
                        sx: {
                          color: theme.palette.text.primary,
                        },
                      },
                    }}
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>

      <Paper
        elevation={3}
        sx={{
          p: 3,
          mt: 5,
          backgroundColor: colors.highlightBg,
          border: `1px solid ${theme.palette.primary.main}20`,
        }}
      >
        <Typography variant="subtitle1" gutterBottom color="text.primary">
          📌 Ejemplo de commit bien formado:
        </Typography>
        <Box
          sx={{
            fontFamily: "monospace",
            backgroundColor: colors.codeBlockBg,
            color: theme.palette.text.primary,
            p: 2,
            borderRadius: 2,
            border: `1px dashed ${colors.codeBlockBorder}`,
          }}
        >
          feat(PJT-432): Agrega validación de correo en el formulario
        </Box>
      </Paper>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button variant="contained" color="primary">
          Ver más ejemplos reales
        </Button>
      </Box>

      <Paper
        elevation={2}
        sx={{ p: 4, mt: 6, backgroundColor: theme.palette.background.paper }}
      >
        <Typography variant="h6" gutterBottom color="text.primary">
          Quiz: ¿Cuál es el beneficio principal del tipado fuerte?
        </Typography>
        <RadioGroup
          value={quizAnswer}
          onChange={(e) => setQuizAnswer(e.target.value)}
          sx={{ mt: 2 }}
        >
          <FormControlLabel
            value="rendimiento"
            control={<Radio sx={{ color: theme.palette.primary.main }} />}
            label={
              <Typography color="text.primary">Mejor rendimiento</Typography>
            }
          />
          <FormControlLabel
            value="claridad"
            control={<Radio sx={{ color: theme.palette.primary.main }} />}
            label={
              <Typography color="text.primary">
                Mayor claridad y menos bugs
              </Typography>
            }
          />
          <FormControlLabel
            value="lineas"
            control={<Radio sx={{ color: theme.palette.primary.main }} />}
            label={
              <Typography color="text.primary">
                Menos líneas de código
              </Typography>
            }
          />
        </RadioGroup>
        <Button sx={{ mt: 3 }} variant="outlined" onClick={handleQuizSubmit}>
          Verificar respuesta
        </Button>
        {showQuizResult && (
          <Box
            sx={{
              mt: 3,
              p: 2,
              backgroundColor:
                quizAnswer === "claridad" ? colors.successBg : colors.errorBg,
              color:
                quizAnswer === "claridad"
                  ? colors.successText
                  : colors.errorText,
              borderRadius: 2,
              border: "1px solid",
              borderColor:
                quizAnswer === "claridad"
                  ? colors.successBorder
                  : colors.errorBorder,
            }}
          >
            <Typography>
              {quizAnswer === "claridad"
                ? "✅ ¡Correcto! El tipado fuerte mejora la comprensión y evita errores."
                : "❌ No es correcto. Intenta nuevamente y repasa los conceptos."}
            </Typography>
          </Box>
        )}
      </Paper>

      <Tooltip
        title="Aplica estas herramientas en tu día a día y verás resultados reales en la calidad del trabajo en equipo."
        arrow
        slotProps={{
          tooltip: {
            sx: {
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              fontSize: "0.875rem",
              maxWidth: 300,
            },
          },
        }}
      >
        <Typography
          align="center"
          sx={{
            mt: 5,
            fontStyle: "italic",
            color: theme.palette.text.secondary,
            cursor: "help",
          }}
        >
          🚀 ¡Implementar buenas prácticas no es una opción, es una necesidad!
        </Typography>
      </Tooltip>
    </Box>
  );
};

export default SlideHerramientas;
