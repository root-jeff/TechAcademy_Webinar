import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Alert,
  Container,
  Paper,
  Chip,
  Link,
  Fade,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useTheme,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  Code as CodeIcon,
  Folder as FolderIcon,
  Api as ApiIcon,
  Palette as PaletteIcon,
  Quiz as QuizIcon,
  Lightbulb as LightbulbIcon,
  Book as BookIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";

interface QuizOption {
  label: string;
  isCorrect: boolean;
}

const SlideDocumentacion: React.FC = () => {
  const theme = useTheme();
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const isDarkMode = theme.palette.mode === "dark";

  const quizOptions: QuizOption[] = [
    { label: "Git", isCorrect: false },
    { label: "Postman", isCorrect: true },
    { label: "VSCode", isCorrect: false },
  ];

  const documentationLevels = [
    {
      id: "codigo",
      title: "Documentación dentro del código",
      icon: <CodeIcon />,
      description:
        "Docstrings, comentarios claros, JSDoc, Pydantic. El código debe ser autoexplicativo.",
      example: {
        title: "Ejemplo Python:",
        code: `def calcular_precio_total(precio_base: float, impuesto: float = 0.21) -> float:
    """
    Calcula el precio total incluyendo impuestos.
    
    Args:
        precio_base (float): Precio sin impuestos
        impuesto (float): Porcentaje de impuesto (default: 0.21)
    
    Returns:
        float: Precio total con impuestos incluidos
    
    Example:
        >>> calcular_precio_total(100, 0.21)
        121.0
    """
    return precio_base * (1 + impuesto)`,
      },
    },
    {
      id: "junto",
      title: "Documentación junto al código",
      icon: <FolderIcon />,
      description:
        "README, tutoriales internos, diagramas de arquitectura. Contexto del proyecto.",
      items: [
        "Descripción del proyecto",
        "Instalación y configuración",
        "Ejemplos de uso",
        "Estructura de carpetas",
        "Cómo contribuir",
      ],
    },
    {
      id: "api",
      title: "Documentación de consumo de API",
      icon: <ApiIcon />,
      description:
        "Swagger, Insomnia, Postman. Facilita la integración y testing.",
      example: {
        title: "Configuración Swagger en Flask:",
        code: `from flasgger import Swagger, swag_from

app = Flask(__name__)
Swagger(app, template_file='swagger_config.yml')

@app.route('/users/<int:user_id>')
@swag_from('docs/get_user.yml')
def get_user(user_id):
    return jsonify({"id": user_id, "name": "Juan"})`,
      },
    },
    {
      id: "frontend",
      title: "Documentación del frontend",
      icon: <PaletteIcon />,
      description:
        "Componentes, props, flujos visuales, diagramas de navegación.",
      example: {
        title: "Ejemplo TypeScript/React:",
        code: `interface ButtonProps {
  /** Texto del botón */
  label: string;
  /** Variante visual del botón */
  variant?: 'primary' | 'secondary' | 'danger';
  /** Función que se ejecuta al hacer click */
  onClick: () => void;
  /** Si el botón está deshabilitado */
  disabled?: boolean;
}

/**
 * Botón reutilizable con diferentes variantes
 * @example
 * <Button label="Guardar" variant="primary" onClick={handleSave} />
 */
export const Button: React.FC<ButtonProps> = ({ ... }) => { ... }`,
      },
    },
  ];

  const handleAnswerSelect = (answer: string): void => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
  };

  const resetQuiz = (): void => {
    setSelectedAnswer("");
    setShowFeedback(false);
  };

  const isCorrectAnswer = (answer: string): boolean => {
    return (
      quizOptions.find((option) => option.label === answer)?.isCorrect || false
    );
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 4,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <BookIcon sx={{ fontSize: 40, color: "primary.main" }} />
          <Typography
            variant="h4"
            color="primary.main"
            sx={{ fontWeight: "bold" }}
          >
            La importancia de documentar
          </Typography>
        </Box>
      </Box>

      {/* Introduction */}
      <Paper
        sx={{
          p: 3,
          mb: 4,
          background:
            "linear-gradient(135deg, rgba(130, 0, 124, 0.05) 0%, rgba(210, 74, 224, 0.05) 100%)",
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: "1.1rem", lineHeight: 1.6 }}
        >
          La documentación es el puente entre el código que escribes hoy y el
          equipo que lo mantendrá mañana. Existen diferentes niveles que debes
          considerar para crear un ecosistema de información completo.
        </Typography>
      </Paper>

      {/* Documentation Levels */}
      <Typography
        variant="h5"
        sx={{ mb: 3, display: "flex", alignItems: "center", gap: 1 }}
      >
        📋 Los cuatro niveles de documentación
      </Typography>

      {documentationLevels.map((level, index) => (
        <Accordion key={level.id} sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.primary.light}15 100%)`,
              "&:hover": {
                background: `linear-gradient(135deg, ${theme.palette.primary.main}25 0%, ${theme.palette.primary.light}25 100%)`,
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Chip
                label={index + 1}
                color="primary"
                size="small"
                sx={{ minWidth: 32, height: 32 }}
              />
              {level.icon}
              <Typography variant="h6">{level.title}</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {level.description}
            </Typography>

            {level.example && (
              <Paper
                sx={{
                  p: 2,
                  backgroundColor: isDarkMode ? "grey.900" : "grey.50",
                  border: `1px solid ${theme.palette.primary.main}30`,
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{ mb: 1, fontWeight: "bold" }}
                >
                  {level.example.title}
                </Typography>
                <Box
                  component="pre"
                  sx={{
                    fontFamily: 'Monaco, Consolas, "Courier New", monospace',
                    fontSize: "0.875rem",
                    lineHeight: 1.4,
                    overflow: "auto",
                    margin: 0,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {level.example.code}
                </Box>
              </Paper>
            )}

            {level.items && (
              <Paper
                sx={{
                  p: 2,
                  backgroundColor: isDarkMode ? "grey.900" : "grey.50",
                  border: `1px solid ${theme.palette.secondary.main}50`,
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{ mb: 1, fontWeight: "bold" }}
                >
                  📋 Plantilla README:
                </Typography>
                <List dense>
                  {level.items.map((item, idx) => (
                    <ListItem key={idx}>
                      <ListItemIcon sx={{ minWidth: 24 }}>
                        <CheckCircleIcon
                          sx={{ fontSize: 16, color: "secondary.main" }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            )}
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Quiz Section */}
      <Paper sx={{ p: 3, mt: 4, backgroundColor: "background.paper" }}>
        <Typography
          variant="h5"
          sx={{
            mb: 3,
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "primary.main",
          }}
        >
          <QuizIcon /> Cuestionario: Pon a prueba tu conocimiento
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          ¿Qué herramienta es ideal para probar y documentar visualmente tus
          endpoints?
        </Typography>

        <Box sx={{ mb: 3, display: "flex", gap: 2, flexWrap: "wrap" }}>
          {quizOptions.map((option) => (
            <Button
              key={option.label}
              variant={
                selectedAnswer === option.label ? "contained" : "outlined"
              }
              onClick={() => handleAnswerSelect(option.label)}
              sx={{
                minWidth: 120,
                position: "relative",
              }}
              endIcon={
                selectedAnswer === option.label &&
                option.isCorrect &&
                showFeedback ? (
                  <CheckCircleIcon />
                ) : null
              }
            >
              {option.label}
            </Button>
          ))}
        </Box>

        <Fade in={showFeedback}>
          <Box>
            {showFeedback && (
              <Alert
                severity={isCorrectAnswer(selectedAnswer) ? "success" : "error"}
                action={
                  <Button color="inherit" size="small" onClick={resetQuiz}>
                    Reintentar
                  </Button>
                }
                sx={{ mb: 2 }}
              >
                {isCorrectAnswer(selectedAnswer) ? (
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      ¡Correcto! 🎉
                    </Typography>
                    <Typography variant="body2">
                      Postman es excelente para probar endpoints, crear
                      colecciones de pruebas y generar documentación automática
                      de APIs.
                    </Typography>
                  </Box>
                ) : (
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      Incorrecto.
                    </Typography>
                    <Typography variant="body2">
                      {selectedAnswer === "Git" &&
                        "Git es para control de versiones, no para testing de APIs."}
                      {selectedAnswer === "VSCode" &&
                        "VSCode es un editor de código, aunque tiene extensiones para APIs."}
                      <br />
                      La respuesta correcta es <strong>Postman</strong>.
                    </Typography>
                  </Box>
                )}
              </Alert>
            )}
          </Box>
        </Fade>
      </Paper>

      {/* Useful Resources */}
      <Paper
        sx={{
          p: 3,
          mt: 3,
          backgroundColor: "secondary.main",
          color: "secondary.contrastText",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          🔗 Recursos útiles
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {[
            {
              title: "OpenAPI Specification",
              url: "https://swagger.io/specification/",
            },
            { title: "JSDoc Documentation", url: "https://jsdoc.app/" },
            {
              title: "Postman API Documentation",
              url: "https://www.postman.com/api-documentation-tool/",
            },
          ].map((resource) => (
            <Link
              key={resource.title}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "secondary.contrastText",
                textDecoration: "underline",
                fontWeight: 600,
                "&:hover": {
                  opacity: 0.8,
                },
              }}
            >
              {resource.title}
            </Link>
          ))}
        </Box>
      </Paper>

      {/* Professional Tip */}
      <Alert
        icon={<LightbulbIcon />}
        severity="info"
        sx={{
          mt: 3,
          backgroundColor: "primary.main",
          color: "primary.contrastText",
          "& .MuiAlert-icon": {
            color: "primary.contrastText",
          },
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          💡 Tip profesional:
        </Typography>
        <Typography variant="body1">
          Siempre actualiza la documentación como parte de tu Definition of
          Done. Una feature no está completa hasta que su documentación refleje
          los cambios realizados. Tu yo del futuro (y tu equipo) te lo
          agradecerán.
        </Typography>
      </Alert>
    </Container>
  );
};

export default SlideDocumentacion;
