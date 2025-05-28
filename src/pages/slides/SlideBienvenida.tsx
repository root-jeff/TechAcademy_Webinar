import {
  Typography,
  Paper,
  Box,
  Button,
  Tooltip,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SlideBienvenida() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        🎉 ¡Bienvenido al webinar: Del Caos al Código Limpio!
      </Typography>

      <Typography paragraph>
        En este webinar descubrirás cómo trabajar en equipo con código bien estructurado,
        documentado y probado. Vamos más allá de programar: exploramos cómo colaborar mejor,
        evitar errores comunes y construir software de calidad desde la base.
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography paragraph>
        ¿Te ha pasado que llegas a un proyecto y sientes que cada archivo es una trampa mortal?
        ¿Funciones de 300 líneas? ¿Nombres como "func2"? Hoy vamos a cambiar eso.
      </Typography>

      <Paper variant="outlined" sx={{ p: 2, my: 2 }}>
        <Typography>
          En este espacio aprenderás:
        </Typography>
        <ul>
          <li>🔧 Cómo estructurar tu backend para trabajar en equipo sin dolor</li>
          <li>📘 Documentar tus endpoints con claridad y propósito</li>
          <li>🧪 Escribir pruebas unitarias reales y mantenibles</li>
          <li>🤝 Usar herramientas modernas para mantener orden y calidad</li>
        </ul>
      </Paper>

      <Accordion sx={{ my: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>🚨 Ejemplo de proyecto mal iniciado</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph>
            - Archivos sin estructura (todo dentro de "app.py")
            <br />- Variables como x1, x2, z
            <br />- Ningún README o documentación técnica
            <br />- Funciones gigantes sin pruebas automatizadas
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Tooltip title="¡Inicia tu camino hacia un mejor desarrollo!">
        <Button variant="contained" color="primary" endIcon={<LiveTvIcon />}>
          Comencemos
        </Button>
      </Tooltip>

      <Typography variant="caption" display="block" mt={3}>
        ✨ Un buen código no nace del caos, nace de la colaboración consciente. Piensa en tu equipo del futuro.
      </Typography>
    </Box>
  );
}