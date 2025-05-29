import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Button,
  Chip,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  RadioGroup,
  FormControlLabel,
  Radio,
  Alert,
  Divider,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  Collapse,
  Grid,
  Stack,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  Build as BuildIcon,
  Computer as ComputerIcon,
  Quiz as QuizIcon,
  Lightbulb as LightbulbIcon,
  Architecture as ArchitectureIcon,
  Check as CheckIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

export default function SlideEstructuras() {
  const [showComparison, setShowComparison] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const handleAnswerSubmit = () => {
    setShowFeedback(true);
  };

  const isCorrect = selectedAnswer === "servicios";

  const codeString1 = `.
├── logs/                         # Archivos de logs generados por la app
│   └── app-YYYY-MM-DD.log
├── setup/                        # Configuración para despliegue y CI/CD
│   ├── dockerfile/               # Dockerfiles para desarrollo y producción
│   │   ├── Dockerfile.dev
│   │   └── Dockerfile.prod
│   └── jenkins/                  # Scripts de Jenkins
│       └── Jenkinsfile
├── app/                          # Código fuente principal
│   ├── config/                   # Configuración general del sistema
│   │   └── settings.py
│   ├── controllers/             # Entradas HTTP y lógica de enrutamiento
│   │   ├── **init**.py
│   │   ├── example_controller.py
│   ├── models/                  # Definición de estructuras de datos
│   │   ├── **init**.py
│   │   ├── base_model.py
│   ├── repositories/            # Acceso a base de datos y persistencia
│   │   ├── **init**.py
│   │   └── example_repository.py
│   ├── services/                # Lógica de negocio (reglas, operaciones)
│   │   ├── **init**.py
│   │   └── example_service.py
│   ├── resources/               # Herramientas, errores, conexión DB
│   │   ├── exceptions/
│   │   │   └── api_exception.py
│   │   └── db.py
│   ├── utils/                   # Funciones auxiliares reutilizables
│   │   ├── logging.py
│   │   └── helpers.py
│   ├── swagger/                 # Documentación OpenAPI (Swagger)
│   │   └── swagger.yaml
│   ├── test/                    # Pruebas unitarias o de integración
│   │   └── test_example.py
│   ├── **main**.py              # Entry point de la aplicación
│   └── **init**.py
├── .dockerignore                # Ignorados por Docker
├── .env                         # Variables de entorno
├── .gitignore                   # Ignorados por Git
├── docker-compose.yml           # Orquestación de contenedores
├── README.md                    # Documentación principal del proyecto
└── requirements.txt             # Dependencias del entorno Python`;

  const codeString2 = `frontend/
├── src/
│   ├── components/
│   │   ├── common/
│   │   └── feature-specific/
│   ├── services/
│   │   ├── api.service.ts
│   │   └── user.service.ts
│   ├── models/
│   │   ├── user.interface.ts
│   │   └── api.types.ts
│   ├── hooks/
│   ├── utils/
│   └── pages/
│       └── user/
└── tests/`;

  const codeString3 = `# Controller
@app.post("/users")
async def create_user(user_data: UserCreate):
    return await user_service.create_user(user_data)

# Service  
async def create_user(user_data: UserCreate):
    if await self.email_exists(user_data.email):
        raise ValueError("Email ya existe")
    return await user_repository.save(user_data)

# Repository
async def save(self, user_data: UserCreate):
    query = "INSERT INTO users..."
    return await database.execute(query)`;

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 1, sm: 2, md: 4 },
        px: { xs: 1, sm: 2, md: 3 },
      }}
    >
      {/* Header */}
      <Box sx={{ mb: { xs: 2, sm: 3, md: 4 }, textAlign: "center" }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          justifyContent="center"
          spacing={1}
          sx={{ mb: 1 }}
        >
          <ArchitectureIcon
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            }}
            color="primary"
          />
          <Typography
            variant={isMobile ? "h5" : isTablet ? "h4" : "h3"}
            component="h1"
            sx={{
              fontWeight: 700,
              color: "primary.main",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            ¿Por qué estructurar tu código?
          </Typography>
        </Stack>
      </Box>

      {/* Introduction */}
      <Paper
        elevation={3}
        sx={{
          p: { xs: 1.5, sm: 2, md: 3 },
          mb: { xs: 2, sm: 3, md: 4 },
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(135deg, rgba(210, 74, 224, 0.1) 0%, rgba(130, 0, 124, 0.1) 100%)"
              : "linear-gradient(135deg, rgba(245, 230, 248, 0.5) 0%, rgba(255, 255, 255, 0.8) 100%)",
        }}
      >
        <Typography
          variant={isMobile ? "body2" : "body1"}
          paragraph
          sx={{
            textAlign: "justify",
            lineHeight: { xs: 1.5, sm: 1.6 },
          }}
        >
          Imagina trabajar en un proyecto donde encontrar una función específica
          toma 30 minutos, donde cambiar una regla de negocio implica tocar 10
          archivos diferentes, o donde agregar una nueva funcionalidad significa
          reescribir medio sistema. Esto no es ficción: es la realidad de muchos
          proyectos mal estructurados.
        </Typography>
        <Typography
          variant={isMobile ? "body2" : "body1"}
          sx={{
            textAlign: "justify",
            lineHeight: { xs: 1.5, sm: 1.6 },
          }}
        >
          La arquitectura por capas no es solo una "buena práctica", es la
          diferencia entre un proyecto escalable y mantenible, y uno que se
          convierte en una pesadilla técnica. Separar responsabilidades permite
          que cada parte del sistema tenga un propósito claro y único,
          facilitando el testing, debugging y evolución del código.
        </Typography>
      </Paper>

      <Divider sx={{ my: { xs: 2, sm: 3, md: 4 } }} />

      {/* Backend Section */}
      <Box sx={{ mb: { xs: 2, sm: 3, md: 4 } }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={1}
          sx={{ mb: { xs: 2, sm: 3 } }}
        >
          <BuildIcon color="primary" />
          <Typography
            variant={isMobile ? "h6" : "h5"}
            component="h2"
            sx={{
              color: "primary.main",
              fontWeight: 600,
            }}
          >
            Backend Moderno con FastAPI
          </Typography>
        </Stack>

        <Typography
          variant={isMobile ? "body2" : "body1"}
          paragraph
          sx={{ mb: { xs: 2, sm: 3 } }}
        >
          Un backend estructurado usando FastAPI (generado desde Swagger Editor)
          sigue una arquitectura clara donde cada capa tiene responsabilidades
          específicas:
        </Typography>

        {/* Architecture Layers */}
        <Grid
          container
          spacing={{ xs: 1.5, sm: 2 }}
          sx={{ mb: { xs: 2, sm: 3 } }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card
              elevation={2}
              sx={{
                height: "100%",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: { xs: "none", sm: "translateY(-4px)" },
                  boxShadow: { xs: 2, sm: theme.shadows[8] },
                },
              }}
            >
              <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
                <Chip
                  label="Controladores"
                  color="primary"
                  size={isMobile ? "small" : "medium"}
                  sx={{ mb: { xs: 1, sm: 2 }, fontWeight: 600 }}
                />
                <Typography
                  variant={isMobile ? "body2" : "body1"}
                  color="text.secondary"
                  sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" } }}
                >
                  Manejan las peticiones HTTP, validan entrada, formatean
                  respuestas. Son el punto de entrada pero NO contienen lógica
                  de negocio.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              elevation={2}
              sx={{
                height: "100%",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: { xs: "none", sm: "translateY(-4px)" },
                  boxShadow: { xs: 2, sm: theme.shadows[8] },
                },
              }}
            >
              <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
                <Chip
                  label="Servicios"
                  color="secondary"
                  size={isMobile ? "small" : "medium"}
                  sx={{ mb: { xs: 1, sm: 2 }, fontWeight: 600 }}
                />
                <Typography
                  variant={isMobile ? "body2" : "body1"}
                  color="text.secondary"
                  sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" } }}
                >
                  Corazón de la aplicación. Aquí vive toda la lógica de negocio,
                  validaciones complejas, orquestación de operaciones y reglas
                  del dominio.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Card
              elevation={2}
              sx={{
                height: "100%",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: { xs: "none", sm: "translateY(-4px)" },
                  boxShadow: { xs: 2, sm: theme.shadows[8] },
                },
              }}
            >
              <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
                <Chip
                  label="Repositorios/DAO"
                  size={isMobile ? "small" : "medium"}
                  sx={{
                    mb: { xs: 1, sm: 2 },
                    fontWeight: 600,
                    backgroundColor:
                      theme.palette.mode === "dark" ? "#2e7d32" : "#e8f5e8",
                    color:
                      theme.palette.mode === "dark" ? "#ffffff" : "#2e7d32",
                  }}
                />
                <Typography
                  variant={isMobile ? "body2" : "body1"}
                  color="text.secondary"
                  sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" } }}
                >
                  Abstracción del acceso a datos. Consultas SQL, operaciones
                  CRUD, mapeo de entidades. Independientes del ORM usado.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Backend Structure */}
        <Paper
          elevation={2}
          sx={{
            p: { xs: 1, sm: 2, md: 3 },
            mb: { xs: 2, sm: 3 },
            backgroundColor:
              theme.palette.mode === "dark" ? "grey.900" : "grey.50",
          }}
        >
          <Typography
            variant={isMobile ? "subtitle1" : "h6"}
            gutterBottom
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            📁 Estructura Backend FastAPI:
          </Typography>
          <Box
            component="pre"
            sx={{
              fontSize: { xs: "0.65rem", sm: "0.75rem", md: "0.875rem" },
              fontFamily: "Consolas, Monaco, monospace",
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "background.paper"
                  : "background.default",
              p: { xs: 1, sm: 2 },
              borderRadius: 1,
              overflow: "auto",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              maxHeight: { xs: "300px", sm: "400px", md: "none" },
              lineHeight: { xs: 1.3, sm: 1.4 },
            }}
          >
            {codeString1}
          </Box>
        </Paper>
      </Box>

      {/* Frontend Section */}
      <Box sx={{ mb: { xs: 2, sm: 3, md: 4 } }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={1}
          sx={{ mb: { xs: 2, sm: 3 } }}
        >
          <ComputerIcon color="primary" />
          <Typography
            variant={isMobile ? "h6" : "h5"}
            component="h3"
            sx={{
              color: "primary.main",
              fontWeight: 600,
            }}
          >
            Frontend Estructurado (React/Angular)
          </Typography>
        </Stack>

        <Typography
          variant={isMobile ? "body2" : "body1"}
          paragraph
          sx={{ mb: { xs: 2, sm: 3 } }}
        >
          El frontend también se beneficia de una arquitectura modular. En React
          o Angular, separamos componentes reutilizables, servicios para lógica
          compartida, modelos con tipado fuerte (TypeScript), y rutas
          organizadas por módulos funcionales.
        </Typography>

        <Paper
          elevation={2}
          sx={{
            p: { xs: 1, sm: 2, md: 3 },
            mb: { xs: 2, sm: 3 },
            backgroundColor:
              theme.palette.mode === "dark" ? "grey.900" : "grey.50",
          }}
        >
          <Typography
            variant={isMobile ? "subtitle1" : "h6"}
            gutterBottom
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            📁 Estructura Frontend React/TypeScript:
          </Typography>
          <Box
            component="pre"
            sx={{
              fontSize: { xs: "0.65rem", sm: "0.75rem", md: "0.875rem" },
              fontFamily: "Consolas, Monaco, monospace",
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "background.paper"
                  : "background.default",
              p: { xs: 1, sm: 2 },
              borderRadius: 1,
              overflow: "auto",
              lineHeight: { xs: 1.3, sm: 1.4 },
            }}
          >
            {codeString2}
          </Box>
        </Paper>
      </Box>

      {/* Comparison Button */}
      <Box sx={{ mb: { xs: 2, sm: 3, md: 4 }, textAlign: "center" }}>
        <Button
          variant="outlined"
          size={isMobile ? "medium" : "large"}
          onClick={() => setShowComparison(!showComparison)}
          sx={{
            minWidth: { xs: "100%", sm: "auto" },
            py: { xs: 1, sm: 1.5 },
            px: { xs: 2, sm: 3 },
            fontSize: { xs: "0.875rem", sm: "1rem" },
          }}
        >
          {showComparison ? "Ocultar" : "Ver"} Comparación: Mal vs Bien
          Estructurado
        </Button>
      </Box>

      {/* Comparison Section */}
      <Collapse in={showComparison}>
        <Grid
          container
          spacing={{ xs: 2, sm: 3 }}
          sx={{ mb: { xs: 2, sm: 3, md: 4 } }}
        >
          <Grid item xs={12} md={6}>
            <Card
              elevation={3}
              sx={{
                height: "100%",
                border: "2px solid",
                borderColor: "error.main",
              }}
            >
              <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{ mb: { xs: 1, sm: 2 } }}
                >
                  <CloseIcon color="error" />
                  <Typography
                    variant={isMobile ? "subtitle1" : "h6"}
                    sx={{ color: "error.main", fontWeight: 600 }}
                  >
                    Código Mal Estructurado
                  </Typography>
                </Stack>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  <Typography
                    component="li"
                    variant={isMobile ? "body2" : "body1"}
                    paragraph
                    sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" } }}
                  >
                    Todo en un solo archivo gigante (1000+ líneas)
                  </Typography>
                  <Typography
                    component="li"
                    variant={isMobile ? "body2" : "body1"}
                    paragraph
                    sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" } }}
                  >
                    Lógica de BD mezclada con controladores
                  </Typography>
                  <Typography
                    component="li"
                    variant={isMobile ? "body2" : "body1"}
                    paragraph
                    sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" } }}
                  >
                    Sin tipado, variables globales por doquier
                  </Typography>
                  <Typography
                    component="li"
                    variant={isMobile ? "body2" : "body1"}
                    paragraph
                    sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" } }}
                  >
                    Funciones que hacen 5 cosas diferentes
                  </Typography>
                  <Typography
                    component="li"
                    variant={isMobile ? "body2" : "body1"}
                    paragraph
                    sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" } }}
                  >
                    Imposible testear unitariamente
                  </Typography>
                  <Typography
                    component="li"
                    variant={isMobile ? "body2" : "body1"}
                    sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" } }}
                  >
                    Cada cambio rompe algo más
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              elevation={3}
              sx={{
                height: "100%",
                border: "2px solid",
                borderColor: "success.main",
              }}
            >
              <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{ mb: { xs: 1, sm: 2 } }}
                >
                  <CheckIcon color="success" />
                  <Typography
                    variant={isMobile ? "subtitle1" : "h6"}
                    sx={{ color: "success.main", fontWeight: 600 }}
                  >
                    Código Bien Estructurado
                  </Typography>
                </Stack>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  <Typography
                    component="li"
                    variant={isMobile ? "body2" : "body1"}
                    paragraph
                    sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" } }}
                  >
                    Responsabilidad única por clase/función
                  </Typography>
                  <Typography
                    component="li"
                    variant={isMobile ? "body2" : "body1"}
                    paragraph
                    sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" } }}
                  >
                    Capas independientes y testeables
                  </Typography>
                  <Typography
                    component="li"
                    variant={isMobile ? "body2" : "body1"}
                    paragraph
                    sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" } }}
                  >
                    Tipado fuerte, interfaces bien definidas
                  </Typography>
                  <Typography
                    component="li"
                    variant={isMobile ? "body2" : "body1"}
                    paragraph
                    sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" } }}
                  >
                    Fácil localizar y modificar funcionalidades
                  </Typography>
                  <Typography
                    component="li"
                    variant={isMobile ? "body2" : "body1"}
                    paragraph
                    sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" } }}
                  >
                    Testing unitario y de integración sencillo
                  </Typography>
                  <Typography
                    component="li"
                    variant={isMobile ? "body2" : "body1"}
                    sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" } }}
                  >
                    Cambios aislados sin efectos colaterales
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Collapse>

      {/* Example Flow Accordion */}
      <Accordion elevation={3} sx={{ mb: { xs: 2, sm: 3, md: 4 } }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ p: { xs: 1, sm: 2 } }}
        >
          <Typography
            variant={isMobile ? "subtitle1" : "h6"}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: { xs: "1rem", sm: "1.25rem" },
              flexWrap: "wrap",
            }}
          >
            🔧 Ejemplo: Flujo completo "Crear Usuario"
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: { xs: 1, sm: 2 } }}>
          <Typography
            variant={isMobile ? "body2" : "body1"}
            paragraph
            sx={{ lineHeight: { xs: 1.5, sm: 1.6 } }}
          >
            <strong>1. Controlador:</strong> Recibe POST /users, valida formato
            JSON
            <br />
            <strong>2. Servicio:</strong> Valida reglas de negocio (email único,
            password seguro)
            <br />
            <strong>3. Repositorio:</strong> Ejecuta INSERT en base de datos
            <br />
            <strong>4. Respuesta:</strong> Usuario creado con ID generado
          </Typography>
          <Box
            component="pre"
            sx={{
              fontSize: { xs: "0.65rem", sm: "0.75rem", md: "0.875rem" },
              fontFamily: "Consolas, Monaco, monospace",
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "background.paper"
                  : "background.default",
              p: { xs: 1, sm: 2 },
              borderRadius: 1,
              overflow: "auto",
              lineHeight: { xs: 1.3, sm: 1.4 },
            }}
          >
            {codeString3}
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Quiz Section */}
      <Paper
        elevation={3}
        sx={{
          p: { xs: 1.5, sm: 2, md: 3 },
          mb: { xs: 2, sm: 3, md: 4 },
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(130, 0, 124, 0.1) 100%)"
              : "linear-gradient(135deg, rgba(240, 247, 255, 0.8) 0%, rgba(245, 230, 248, 0.5) 100%)",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={1}
          sx={{ mb: { xs: 1, sm: 2 } }}
        >
          <QuizIcon color="primary" />
          <Typography
            variant={isMobile ? "subtitle1" : "h6"}
            sx={{
              color: "primary.main",
              fontWeight: 600,
            }}
          >
            Mini Test: Arquitectura FastAPI
          </Typography>
        </Stack>

        <Typography
          variant={isMobile ? "body2" : "body1"}
          paragraph
          sx={{ mb: { xs: 1, sm: 2 } }}
        >
          ¿En qué capa debería estar la lógica de negocio en FastAPI?
        </Typography>

        <RadioGroup
          value={selectedAnswer}
          onChange={(e) => setSelectedAnswer(e.target.value)}
          sx={{ mb: { xs: 1, sm: 2 } }}
        >
          <FormControlLabel
            value="controladores"
            control={<Radio size={isMobile ? "small" : "medium"} />}
            label={
              <Typography variant={isMobile ? "body2" : "body1"}>
                Controladores - Manejan rutas HTTP
              </Typography>
            }
            sx={{
              alignItems: "flex-start",
              "& .MuiFormControlLabel-label": {
                fontSize: { xs: "0.875rem", sm: "1rem" },
              },
            }}
          />
          <FormControlLabel
            value="servicios"
            control={<Radio size={isMobile ? "small" : "medium"} />}
            label={
              <Typography variant={isMobile ? "body2" : "body1"}>
                Servicios - Contienen reglas del dominio
              </Typography>
            }
            sx={{
              alignItems: "flex-start",
              "& .MuiFormControlLabel-label": {
                fontSize: { xs: "0.875rem", sm: "1rem" },
              },
            }}
          />
          <FormControlLabel
            value="repositorios"
            control={<Radio size={isMobile ? "small" : "medium"} />}
            label={
              <Typography variant={isMobile ? "body2" : "body1"}>
                Repositorios - Acceso a base de datos
              </Typography>
            }
            sx={{
              alignItems: "flex-start",
              "& .MuiFormControlLabel-label": {
                fontSize: { xs: "0.875rem", sm: "1rem" },
              },
            }}
          />
        </RadioGroup>

        <Button
          variant="contained"
          size={isMobile ? "medium" : "large"}
          onClick={handleAnswerSubmit}
          disabled={!selectedAnswer}
          sx={{
            minWidth: { xs: "100%", sm: "auto" },
            py: { xs: 1, sm: 1.5 },
            px: { xs: 2, sm: 3 },
            fontSize: { xs: "0.875rem", sm: "1rem" },
          }}
        >
          Verificar Respuesta
        </Button>

        <Collapse in={showFeedback}>
          <Alert severity={isCorrect ? "success" : "error"} sx={{ mt: 2 }}>
            {isCorrect ? (
              <div>
                <strong>¡Correcto!</strong> Los servicios contienen toda la
                lógica de negocio. Los controladores solo manejan HTTP y los
                repositorios solo acceso a datos.
              </div>
            ) : (
              <div>
                <strong>Incorrecto.</strong> La lógica de negocio debe estar en
                los servicios, manteniendo controladores y repositorios
                enfocados en sus responsabilidades específicas.
              </div>
            )}
          </Alert>
        </Collapse>
      </Paper>

      {/* Pro Tip */}
      <Alert
        icon={<LightbulbIcon />}
        severity="info"
        sx={{
          fontSize: { xs: "0.75rem", sm: "0.875rem" },
          "& .MuiAlert-message": {
            width: "100%",
          },
          "& .MuiAlert-icon": {
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
          },
        }}
      >
        <Typography
          variant={isMobile ? "body2" : "body1"}
          sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" } }}
        >
          <strong>Pro Tip:</strong> Usa dependency injection en FastAPI con{" "}
          <Box
            component="code"
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.8rem" },
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(0,0,0,0.1)",
              px: 0.5,
              py: 0.25,
              borderRadius: 0.5,
            }}
          >
            Depends()
          </Box>{" "}
          para inyectar servicios en controladores y repositorios en servicios.
          Esto hace el código más testeable y desacoplado.
        </Typography>
      </Alert>
    </Container>
  );
}
