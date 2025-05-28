import {
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LayersIcon from '@mui/icons-material/Layers';

export default function SlideEstructura() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        🧱 Estructura limpia y por capas
      </Typography>

      <Typography paragraph>
        ¿Te ha tocado mantener un proyecto donde todo está mezclado? Código desordenado,
        sin separación entre lógica, datos y presentación. La solución: una arquitectura por capas.
      </Typography>

      <Typography paragraph>
        Una estructura típica incluye:
        <ul>
          <li><strong>Controladores:</strong> manejan rutas y entradas HTTP.</li>
          <li><strong>Servicios:</strong> contienen la lógica de negocio.</li>
          <li><strong>Repositorios:</strong> interactúan con la base de datos.</li>
        </ul>
      </Typography>

      <Paper variant="outlined" sx={{ p: 2, mt: 2 }}>
        <pre>{`src/
├── controllers/
├── services/
├── repositories/
└── models/`}</pre>
      </Paper>

      <Accordion sx={{ mt: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><LayersIcon sx={{ mr: 1 }} /> Ejemplo: flujo de una petición</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Una petición HTTP llega a un controlador, este llama al servicio correspondiente,
            el cual a su vez utiliza un repositorio para acceder a los datos.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Typography variant="caption" display="block" mt={2}>
        🧠 Código organizado es código mantenible.
      </Typography>
    </Box>
  );
}
