import {
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BugReportIcon from '@mui/icons-material/BugReport';

export default function SlidePruebas() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        🧪 Pruebas unitarias que de verdad ayudan
      </Typography>

      <Typography paragraph>
        Una buena prueba no solo verifica resultados, sino que documenta comportamientos
        esperados. En Python, usamos Pytest. En Angular, Jasmine y Karma.
      </Typography>

      <Paper variant="outlined" sx={{ p: 2, mt: 2 }}>
        <pre>{`def test_suma():
  assert suma(2, 3) == 5`}</pre>
      </Paper>

      <Accordion sx={{ mt: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><BugReportIcon sx={{ mr: 1 }} /> Buenas prácticas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>Nombrar tests de forma clara.</li>
            <li>Testear un único comportamiento por test.</li>
            <li>Evitar dependencias externas con mocks.</li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Typography variant="caption" display="block" mt={2}>
        ✅ Si algo es importante, debe tener una prueba.
      </Typography>
    </Box>
  );
}
