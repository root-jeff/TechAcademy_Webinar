import { Typography, Paper, Link as MuiLink, Tooltip, Box } from '@mui/material';

export default function SlideDocumentacion() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        📘 Documentación técnica clara y útil
      </Typography>

      <Typography paragraph>
        La documentación no es un lujo, es una necesidad. Define contratos claros con Swagger/OpenAPI
        y ayuda a tu equipo a entender y usar tu API de forma rápida.
      </Typography>

      <Paper variant="outlined" sx={{ p: 2, mt: 2 }}>
        <pre>{`from flasgger import Swagger
app = Flask(__name__)
Swagger(app)`}</pre>
      </Paper>

      <Tooltip title="Ir al estándar oficial de OpenAPI">
        <Typography mt={2}>
          🔗 Recurso útil: <MuiLink href="https://swagger.io/specification/" target="_blank">swagger.io/specification</MuiLink>
        </Typography>
      </Tooltip>

      <Typography variant="caption" display="block" mt={2}>
        ✍️ Documenta pensando en quienes mantendrán tu código.
      </Typography>
    </Box>
  );
}