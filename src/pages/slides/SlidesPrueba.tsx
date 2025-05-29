import React, { useState } from "react";
import {
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Alert,
  LinearProgress,
  Chip,
  Divider,
  useTheme,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  BugReport as BugReportIcon,
  Code as CodeIcon,
  PlayArrow as PlayArrowIcon,
  IntegrationInstructions as IntegrationIcon,
  Assessment as AssessmentIcon,
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
} from "@mui/icons-material";

export default function SlidePruebas() {
  const theme = useTheme();
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);
  };

  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        p: { xs: 2, md: 3 },
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          🧪 ¿Por qué hacer pruebas automatizadas?
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ maxWidth: 800, mx: "auto" }}
        >
          Las pruebas automatizadas son el fundamento de un desarrollo confiable
          y escalable. Te permiten detectar errores temprano, documentar
          comportamientos y desplegar con confianza.
        </Typography>
      </Box>

      {/* Ejemplos de Testing */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ height: "100%" }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <CodeIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Backend - Python + Pytest</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" paragraph>
                Pytest es el framework estándar para testing en Python. Ofrece
                sintaxis simple, fixtures potentes y excelente integración con
                herramientas de CI/CD.
              </Typography>
              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  bgcolor:
                    theme.palette.mode === "light" ? "grey.50" : "grey.900",
                  fontFamily: "monospace",
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <pre
                  style={{
                    margin: 0,
                    fontSize: "0.85rem",
                    whiteSpace: "pre-wrap",
                    color: theme.palette.text.primary,
                  }}
                >
                  {`# test_calculator.py
import pytest
from calculator import Calculator

def test_suma_positivos():
    calc = Calculator()
    result = calc.suma(5, 3)
    assert result == 8

@pytest.mark.parametrize("a,b,expected", [
    (2, 3, 5),
    (-1, 1, 0),
    (0, 0, 0)
])
def test_suma_casos_multiples(a, b, expected):
    calc = Calculator()
    assert calc.suma(a, b) == expected`}
                </pre>
              </Paper>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ height: "100%" }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <PlayArrowIcon color="secondary" sx={{ mr: 1 }} />
                <Typography variant="h6">Frontend - Angular + Jest</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" paragraph>
                Jest + Angular Testing Utilities proporcionan un entorno robusto
                para testear componentes, servicios y pipes de Angular.
              </Typography>
              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  bgcolor:
                    theme.palette.mode === "light" ? "grey.50" : "grey.900",
                  fontFamily: "monospace",
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <pre
                  style={{
                    margin: 0,
                    fontSize: "0.85rem",
                    whiteSpace: "pre-wrap",
                    color: theme.palette.text.primary,
                  }}
                >
                  {`// user.service.spec.ts
describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch users', () => {
    const mockUsers = [{ id: 1, name: 'John' }];
    
    service.getUsers().subscribe(users => {
      expect(users).toEqual(mockUsers);
    });

    const req = httpMock.expectOne('/api/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });
});`}
                </pre>
              </Paper>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* CI/CD Integration */}
      <Card
        elevation={3}
        sx={{
          mb: 4,
          background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 100%)`,
          color: theme.palette.secondary.contrastText,
        }}
      >
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <IntegrationIcon sx={{ mr: 1 }} />
            <Typography variant="h6">Integración en CI/CD Pipeline</Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" paragraph>
                <strong>Docker + Jenkins:</strong> Los tests se ejecutan en
                contenedores aislados, garantizando consistencia entre entornos.
                El pipeline automáticamente:
              </Typography>
              <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                <li>Ejecuta tests unitarios en paralelo</li>
                <li>Genera reportes de cobertura con Coverage.py</li>
                <li>Bloquea merge si cobertura &lt; 80%</li>
                <li>Envía notificaciones con resultados</li>
              </Box>
              <Typography variant="body2">
                <strong>Cómo ver el coverage:</strong> Jenkins integra los
                reportes generados por Coverage.py y muestra métricas visuales
                en cada build. Esto permite tomar decisiones informadas sobre la
                calidad del código antes del deployment.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  p: 2,
                  bgcolor: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Typography variant="subtitle2" gutterBottom>
                  <AssessmentIcon sx={{ mr: 1, verticalAlign: "middle" }} />
                  Coverage Actual
                </Typography>
                {[
                  { name: "Total", value: 85 },
                  { name: "Backend", value: 92 },
                  { name: "Frontend", value: 78 },
                  { name: "Integration", value: 81 },
                ].map((item) => (
                  <Box key={item.name} sx={{ mb: 1 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 0.5,
                      }}
                    >
                      <Typography variant="caption">{item.name}</Typography>
                      <Typography variant="caption">{item.value}%</Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={item.value}
                      sx={{
                        height: 6,
                        borderRadius: 3,
                        bgcolor:
                          theme.palette.mode === "light"
                            ? "grey.200"
                            : "grey.700",
                        "& .MuiLinearProgress-bar": {
                          bgcolor: theme.palette.primary.main,
                        },
                      }}
                    />
                  </Box>
                ))}
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Accordion para errores comunes */}
      <Accordion sx={{ mb: 4, boxShadow: 3 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            bgcolor: theme.palette.mode === "light" ? "#ffebee" : "#5f2c2c",
            color: theme.palette.mode === "light" ? "#c62828" : "#ffcdd2",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <BugReportIcon sx={{ mr: 1 }} />
            <Typography variant="h6">⚠️ Errores Comunes al Testear</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            bgcolor:
              theme.palette.mode === "light"
                ? "grey.50"
                : theme.palette.background.paper,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Alert severity="error" sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Tests demasiado acoplados
                </Typography>
                <Typography variant="body2">
                  Testear implementación en lugar de comportamiento. Usa mocks
                  para dependencias externas.
                </Typography>
              </Alert>
              <Alert severity="warning" sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Nombres poco descriptivos
                </Typography>
                <Typography variant="body2">
                  ❌ test_user() → ✅ test_user_login_with_valid_credentials()
                </Typography>
              </Alert>
            </Grid>
            <Grid item xs={12} md={6}>
              <Alert severity="info" sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Tests lentos o flaky
                </Typography>
                <Typography variant="body2">
                  Evita llamadas a APIs reales. Usa fixtures y datos
                  determinísticos.
                </Typography>
              </Alert>
              <Alert severity="error">
                <Typography variant="subtitle2" gutterBottom>
                  Ignorar tests que fallan
                </Typography>
                <Typography variant="body2">
                  Un test roto es peor que no tener test. Mantén el suite verde
                  siempre.
                </Typography>
              </Alert>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* Reporte de Cobertura */}
      <Paper
        elevation={3}
        sx={{
          p: 3,
          mb: 4,
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
          color: theme.palette.primary.contrastText,
        }}
      >
        <Typography variant="h6" gutterBottom>
          📊 Reporte de Cobertura - Jenkins Pipeline
        </Typography>
        <Divider sx={{ my: 2, bgcolor: "rgba(255,255,255,0.2)" }} />
        <Box sx={{ fontFamily: "monospace", fontSize: "0.9rem" }}>
          <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>
            {`========== Coverage Report ==========
Name                    Stmts   Miss  Cover
-------------------------------------------
src/services/user.py       45      2    96%
src/models/product.py      32      5    84%
src/utils/helpers.py       28      8    71%
src/main.py               15      0   100%
-------------------------------------------
TOTAL                     120     15    88%
✅ Coverage threshold: 80% - PASSED
🚀 Deploying to staging environment...`}
          </pre>
        </Box>
      </Paper>

      {/* Pregunta Interactiva */}
      <Card
        elevation={3}
        sx={{
          background: theme.palette.mode === "light" ? "#fff3e0" : "#3e2723",
          p: 3,
          border: `2px solid ${theme.palette.secondary.main}`,
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color:
              theme.palette.mode === "light"
                ? "#e65100"
                : theme.palette.secondary.main,
          }}
        >
          🤔 Pregunta Interactiva
        </Typography>
        <Typography variant="body1" paragraph>
          ¿Qué herramienta permite ver el coverage de pruebas automáticamente en
          un pipeline?
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            mb: 3,
          }}
        >
          {[
            { id: "black", label: "Black" },
            { id: "coverage", label: "Coverage.py + Jenkins" },
            { id: "mypy", label: "MyPy" },
          ].map((option) => (
            <Button
              key={option.id}
              variant={selectedAnswer === option.id ? "contained" : "outlined"}
              onClick={() => handleAnswerSelect(option.id)}
              sx={{ flex: 1 }}
              color={
                showResult
                  ? option.id === "coverage"
                    ? "success"
                    : "error"
                  : "primary"
              }
              startIcon={
                showResult ? (
                  option.id === "coverage" ? (
                    <CheckCircleIcon />
                  ) : (
                    <ErrorIcon />
                  )
                ) : null
              }
            >
              {option.label}
            </Button>
          ))}
        </Box>

        {showResult && (
          <Alert
            severity={selectedAnswer === "coverage" ? "success" : "error"}
            sx={{ mb: 2 }}
          >
            {selectedAnswer === "coverage"
              ? "¡Correcto! Coverage.py genera reportes de cobertura que Jenkins puede integrar y mostrar en el pipeline."
              : "Incorrecto. Black es para formateo de código y MyPy para type checking. Coverage.py es la herramienta específica para medir cobertura de tests."}
          </Alert>
        )}

        {/* Recomendación Final */}
        <Paper
          sx={{
            p: 2,
            bgcolor: theme.palette.mode === "light" ? "#e3f2fd" : "#1a237e",
            borderLeft: `4px solid ${theme.palette.primary.main}`,
            color: theme.palette.mode === "light" ? "#0d47a1" : "#bbdefb",
          }}
        >
          <Typography variant="subtitle2" gutterBottom>
            💡 Recomendación Final
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Integra validaciones automáticas antes del merge:</strong>{" "}
            Configura branch protection rules que requieran tests passing +
            coverage mínimo del 80% + code review antes de hacer merge a main.
            Esto previene que código sin testear llegue a producción.
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            <Chip
              label="Pre-commit hooks"
              size="small"
              sx={{
                bgcolor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              }}
            />
            <Chip
              label="GitHub Actions"
              size="small"
              sx={{
                bgcolor: theme.palette.secondary.main,
                color: theme.palette.secondary.contrastText,
              }}
            />
            <Chip
              label="Quality Gates"
              size="small"
              sx={{
                bgcolor: theme.palette.mode === "light" ? "#4caf50" : "#81c784",
                color: theme.palette.mode === "light" ? "#ffffff" : "#000000",
              }}
            />
          </Box>
        </Paper>
      </Card>
    </Box>
  );
}
