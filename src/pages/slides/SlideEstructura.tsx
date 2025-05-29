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
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
│   │   ├── __init__.py
│   │   ├── example_controller.py
│   ├── models/                  # Definición de estructuras de datos
│   │   ├── __init__.py
│   │   ├── base_model.py
│   ├── repositories/            # Acceso a base de datos y persistencia
│   │   ├── __init__.py
│   │   └── example_repository.py
│   ├── services/                # Lógica de negocio (reglas, operaciones)
│   │   ├── __init__.py
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
│   ├── __main__.py              # Entry point de la aplicación
│   └── __init__.py
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
        py: { xs: 2, md: 4 },
        px: { xs: 2, md: 3 },
      }}
    >
      {/* Header */}
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          component="h1"
          gutterBottom
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1,
            fontWeight: 700,
            color: "primary.main",
          }}
        >
          <ArchitectureIcon sx={{ fontSize: "inherit" }} />
          ¿Por qué estructurar tu código?
        </Typography>
      </Box>

      {/* Introduction */}
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, md: 3 },
          mb: 4,
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(135deg, rgba(210, 74, 224, 0.1) 0%, rgba(130, 0, 124, 0.1) 100%)"
              : "linear-gradient(135deg, rgba(245, 230, 248, 0.5) 0%, rgba(255, 255, 255, 0.8) 100%)",
        }}
      >
        <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
          Imagina trabajar en un proyecto donde encontrar una función específica
          toma 30 minutos, donde cambiar una regla de negocio implica tocar 10
          archivos diferentes, o donde agregar una nueva funcionalidad significa
          reescribir medio sistema. Esto no es ficción: es la realidad de muchos
          proyectos mal estructurados.
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "justify" }}>
          La arquitectura por capas no es solo una "buena práctica", es la
          diferencia entre un proyecto escalable y mantenible, y uno que se
          convierte en una pesadilla técnica. Separar responsabilidades permite
          que cada parte del sistema tenga un propósito claro y único,
          facilitando el testing, debugging y evolución del código.
        </Typography>
      </Paper>

      <Divider sx={{ my: 4 }} />

      {/* Backend Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          component="h2"
          gutterBottom
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 3,
            color: "primary.main",
          }}
        >
          <BuildIcon />
          Backend Moderno con FastAPI
        </Typography>

        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          Un backend estructurado usando FastAPI (generado desde Swagger Editor)
          sigue una arquitectura clara donde cada capa tiene responsabilidades
          específicas:
        </Typography>

        {/* Architecture Layers */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} md={4}>
            <Card
              elevation={2}
              sx={{
                height: "100%",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: theme.shadows[8],
                },
              }}
            >
              <CardContent>
                <Chip
                  label="Controladores"
                  color="primary"
                  sx={{ mb: 2, fontWeight: 600 }}
                />
                <Typography variant="body2" color="text.secondary">
                  Manejan las peticiones HTTP, validan entrada, formatean
                  respuestas. Son el punto de entrada pero NO contienen lógica
                  de negocio.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              elevation={2}
              sx={{
                height: "100%",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: theme.shadows[8],
                },
              }}
            >
              <CardContent>
                <Chip
                  label="Servicios"
                  color="secondary"
                  sx={{ mb: 2, fontWeight: 600 }}
                />
                <Typography variant="body2" color="text.secondary">
                  Corazón de la aplicación. Aquí vive toda la lógica de negocio,
                  validaciones complejas, orquestación de operaciones y reglas
                  del dominio.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              elevation={2}
              sx={{
                height: "100%",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: theme.shadows[8],
                },
              }}
            >
              <CardContent>
                <Chip
                  label="Repositorios/DAO"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    backgroundColor:
                      theme.palette.mode === "dark" ? "#2e7d32" : "#e8f5e8",
                    color:
                      theme.palette.mode === "dark" ? "#ffffff" : "#2e7d32",
                  }}
                />
                <Typography variant="body2" color="text.secondary">
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
            p: { xs: 2, md: 3 },
            mb: 3,
            backgroundColor:
              theme.palette.mode === "dark" ? "grey.900" : "grey.50",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            📁 Estructura Backend FastAPI:
          </Typography>
          <Box
            component="pre"
            sx={{
              fontSize: { xs: "0.75rem", md: "0.875rem" },
              fontFamily: "Consolas, Monaco, monospace",
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "background.paper"
                  : "background.default",
              p: 2,
              borderRadius: 1,
              overflow: "auto",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            {codeString1}
          </Box>
        </Paper>
      </Box>

      {/* Frontend Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          component="h3"
          gutterBottom
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 3,
            color: "primary.main",
          }}
        >
          <ComputerIcon />
          Frontend Estructurado (React/Angular)
        </Typography>

        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          El frontend también se beneficia de una arquitectura modular. En React
          o Angular, separamos componentes reutilizables, servicios para lógica
          compartida, modelos con tipado fuerte (TypeScript), y rutas
          organizadas por módulos funcionales.
        </Typography>

        <Paper
          elevation={2}
          sx={{
            p: { xs: 2, md: 3 },
            mb: 3,
            backgroundColor:
              theme.palette.mode === "dark" ? "grey.900" : "grey.50",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            📁 Estructura Frontend React/TypeScript:
          </Typography>
          <Box
            component="pre"
            sx={{
              fontSize: { xs: "0.75rem", md: "0.875rem" },
              fontFamily: "Consolas, Monaco, monospace",
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "background.paper"
                  : "background.default",
              p: 2,
              borderRadius: 1,
              overflow: "auto",
            }}
          >
            {codeString2}
          </Box>
        </Paper>
      </Box>

      {/* Comparison Button */}
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Button
          variant="outlined"
          size="large"
          onClick={() => setShowComparison(!showComparison)}
          sx={{
            minWidth: { xs: "100%", sm: "auto" },
            py: 1.5,
            px: 3,
          }}
        >
          {showComparison ? "Ocultar" : "Ver"} Comparación: Mal vs Bien
          Estructurado
        </Button>
      </Box>

      {/* Comparison Section */}
      <Collapse in={showComparison}>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <Card
              elevation={3}
              sx={{
                height: "100%",
                border: "2px solid",
                borderColor: "error.main",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "error.main",
                  }}
                >
                  <CloseIcon />
                  Código Mal Estructurado
                </Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  <Typography component="li" variant="body2" paragraph>
                    Todo en un solo archivo gigante (1000+ líneas)
                  </Typography>
                  <Typography component="li" variant="body2" paragraph>
                    Lógica de BD mezclada con controladores
                  </Typography>
                  <Typography component="li" variant="body2" paragraph>
                    Sin tipado, variables globales por doquier
                  </Typography>
                  <Typography component="li" variant="body2" paragraph>
                    Funciones que hacen 5 cosas diferentes
                  </Typography>
                  <Typography component="li" variant="body2" paragraph>
                    Imposible testear unitariamente
                  </Typography>
                  <Typography component="li" variant="body2">
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
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "success.main",
                  }}
                >
                  <CheckIcon />
                  Código Bien Estructurado
                </Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  <Typography component="li" variant="body2" paragraph>
                    Responsabilidad única por clase/función
                  </Typography>
                  <Typography component="li" variant="body2" paragraph>
                    Capas independientes y testeables
                  </Typography>
                  <Typography component="li" variant="body2" paragraph>
                    Tipado fuerte, interfaces bien definidas
                  </Typography>
                  <Typography component="li" variant="body2" paragraph>
                    Fácil localizar y modificar funcionalidades
                  </Typography>
                  <Typography component="li" variant="body2" paragraph>
                    Testing unitario y de integración sencillo
                  </Typography>
                  <Typography component="li" variant="body2">
                    Cambios aislados sin efectos colaterales
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Collapse>

      {/* Example Flow Accordion */}
      <Accordion elevation={3} sx={{ mb: 4 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            variant="h6"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            🔧 Ejemplo: Flujo completo "Crear Usuario"
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
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
              fontSize: { xs: "0.75rem", md: "0.875rem" },
              fontFamily: "Consolas, Monaco, monospace",
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "background.paper"
                  : "background.default",
              p: 2,
              borderRadius: 1,
              overflow: "auto",
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
          p: { xs: 2, md: 3 },
          mb: 4,
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(130, 0, 124, 0.1) 100%)"
              : "linear-gradient(135deg, rgba(240, 247, 255, 0.8) 0%, rgba(245, 230, 248, 0.5) 100%)",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "primary.main",
          }}
        >
          <QuizIcon />
          Mini Test: Arquitectura FastAPI
        </Typography>

        <Typography variant="body1" paragraph>
          ¿En qué capa debería estar la lógica de negocio en FastAPI?
        </Typography>

        <RadioGroup
          value={selectedAnswer}
          onChange={(e) => setSelectedAnswer(e.target.value)}
          sx={{ mb: 2 }}
        >
          <FormControlLabel
            value="controladores"
            control={<Radio />}
            label="Controladores - Manejan rutas HTTP"
          />
          <FormControlLabel
            value="servicios"
            control={<Radio />}
            label="Servicios - Contienen reglas del dominio"
          />
          <FormControlLabel
            value="repositorios"
            control={<Radio />}
            label="Repositorios - Acceso a base de datos"
          />
        </RadioGroup>

        <Button
          variant="contained"
          size="large"
          onClick={handleAnswerSubmit}
          disabled={!selectedAnswer}
          sx={{
            minWidth: { xs: "100%", sm: "auto" },
            py: 1.5,
            px: 3,
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
          fontSize: "0.875rem",
          "& .MuiAlert-message": {
            width: "100%",
          },
        }}
      >
        <Typography variant="body2">
          <strong>Pro Tip:</strong> Usa dependency injection en FastAPI con{" "}
          <code>Depends()</code>
          para inyectar servicios en controladores y repositorios en servicios.
          Esto hace el código más testeable y desacoplado.
        </Typography>
      </Alert>
    </Container>
  );
}
