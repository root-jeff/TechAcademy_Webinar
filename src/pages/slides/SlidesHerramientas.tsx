// SlideHerramientas.tsx
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Tooltip,
  Box,
  Divider,
  Collapse,
  Button,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BuildIcon from '@mui/icons-material/Build';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { useState } from 'react';

export default function SlideHerramientas() {
  const [showDisaster, setShowDisaster] = useState(false);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        🛠️ Herramientas modernas para equipos modernos
      </Typography>

      <Typography paragraph>
        Las herramientas correctas no solo aumentan la productividad, sino que previenen errores,
        mejoran la colaboración y estandarizan procesos. Cada miembro del equipo debería dominarlas
        para evitar el clásico "en mi máquina sí funciona".
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography paragraph>
        Aquí tienes una selección de herramientas fundamentales:
      </Typography>

      <List dense>
        {[
          "Python + Flask",
          "Pytest",
          "Angular + TypeScript",
          "Docker",
          "Jira",
          "Bitbucket",
          "Sourcetree",
        ].map((tool) => (
          <ListItem key={tool}>
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary={tool} />
          </ListItem>
        ))}
      </List>

      <Accordion sx={{ mt: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            <CodeIcon sx={{ mr: 1 }} /> ¿Cómo se conectan estas herramientas?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph>
            Jira conecta con Bitbucket para ver ramas activas por historia. Bitbucket ejecuta pipelines
            con pruebas en Docker. Sourcetree facilita visualmente los flujos Git.
          </Typography>
          <Typography paragraph>
            En backend, Flask corre en contenedores Docker; Angular se comunica con Swagger. Pytest valida
            el backend antes de mergear.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Box my={3}>
        <Button
          variant="outlined"
          startIcon={<WarningAmberIcon />}
          onClick={() => setShowDisaster((prev) => !prev)}
        >
          ¿Y si no usamos Docker?
        </Button>
        <Collapse in={showDisaster}>
          <Paper variant="outlined" sx={{ p: 2, mt: 1 }}>
            <Typography>
              🔥 *Desastre clásico:* un desarrollador instala Flask 2.3, otro Flask 1.1.
              Nada funciona igual. En producción falla, pero en desarrollo todo parece bien.
              Docker permite entornos idénticos en todos los equipos.
            </Typography>
          </Paper>
        </Collapse>
      </Box>

      <Tooltip title="La mejor herramienta es la que todo el equipo sabe usar bien">
        <Typography variant="caption" display="block" mt={2}>
          🧠 No basta con tener herramientas: hay que integrarlas con sentido.
        </Typography>
      </Tooltip>
    </Box>
  );
}
