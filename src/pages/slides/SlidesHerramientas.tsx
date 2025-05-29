import React, { useState } from 'react';
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
  Chip
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const SlideHerramientas = () => {
  const [expanded, setExpanded] = useState(''); // Corrige: el estado es string, no booleano
  const [quizAnswer, setQuizAnswer] = useState('');
  const [showQuizResult, setShowQuizResult] = useState(false);

  const handleAccordionChange = (panel: any) => (_event: any, isExpanded: any) => {
    setExpanded(isExpanded ? panel : '');
  };

  const handleQuizSubmit = () => {
    setShowQuizResult(true);
  };

  return (
    <Box sx={{ maxWidth: '1000px', margin: '0 auto', p: { xs: 2, md: 4 } }}>
      <Typography variant="h4" align="center" gutterBottom color="primary">
        🛠️ Herramientas para un trabajo en equipo eficiente
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom>
        Las herramientas adecuadas no solo optimizan el tiempo, sino que también refuerzan la colaboración entre los equipos técnicos.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Accordion expanded={expanded === 'jira'} onChange={handleAccordionChange('jira')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                📋 Uso correcto de Jira
                <Chip label="Gestión de tareas" color="info" size="small" />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                  <ListItemText
                    primary="Vincula commits con tareas usando el ID de Jira"
                    secondary="Ejemplo: feat(PJT-432): Agrega validación de correo"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                  <ListItemText
                    primary="Relaciona PRs con incidencias de Jira"
                    secondary="Usa etiquetas como [PJT-432] y agrega 'Closes PJT-432' para cierre automático"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon><InfoOutlinedIcon color="action" /></ListItemIcon>
                  <ListItemText
                    primary="Usa subtareas para dividir entregables complejos"
                    secondary="Mejora la planificación y el seguimiento en sprints"
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12}>
          <Accordion expanded={expanded === 'bitbucket'} onChange={handleAccordionChange('bitbucket')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                🌿 Buen uso de Bitbucket
                <Chip label="Control de versiones" color="success" size="small" />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                  <ListItemText primary="PRs bien descritos, claros y concisos" secondary="Máximo 400 líneas para facilitar revisión" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                  <ListItemText primary="Al menos 2 revisores para PRs críticos" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                  <ListItemText primary="Protección de ramas main/develop" secondary="Con PR, revisión obligatoria y tests exitosos" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><InfoOutlinedIcon color="action" /></ListItemIcon>
                  <ListItemText primary="Reglas de squash y merge para mantener historial limpio" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12}>
          <Accordion expanded={expanded === 'typing'} onChange={handleAccordionChange('typing')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                💻 Herramientas de Tipado
                <Chip label="Calidad de código" color="warning" size="small" />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                  <ListItemText primary="TypeScript en frontend" secondary="Ayuda a detectar errores en tiempo de desarrollo" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                  <ListItemText primary="MyPy en backend Python" secondary="Verifica tipos estáticamente y refuerza la calidad" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                  <ListItemText primary="Ventajas del tipado fuerte" secondary="Mejor comprensión del código, menos bugs y más mantenibilidad" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><InfoOutlinedIcon color="action" /></ListItemIcon>
                  <ListItemText primary="Mejor autocompletado y refactorización segura en editores" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>

      <Paper elevation={3} sx={{ p: 3, mt: 5, bgcolor: '#f1f8e9' }}>
        <Typography variant="subtitle1" gutterBottom>
          📌 Ejemplo de commit bien formado:
        </Typography>
        <Box
          sx={{
            fontFamily: 'monospace',
            bgcolor: '#fafafa',
            p: 2,
            borderRadius: 2,
            border: '1px dashed #ccc',
          }}
        >
          feat(PJT-432): Agrega validación de correo en el formulario
        </Box>
      </Paper>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button variant="contained" color="primary">
          Ver más ejemplos reales
        </Button>
      </Box>

      <Paper elevation={2} sx={{ p: 4, mt: 6 }}>
        <Typography variant="h6" gutterBottom>
          Quiz: ¿Cuál es el beneficio principal del tipado fuerte?
        </Typography>
        <RadioGroup
          value={quizAnswer}
          onChange={(e) => setQuizAnswer(e.target.value)}
          sx={{ mt: 2 }}
        >
          <FormControlLabel value="rendimiento" control={<Radio />} label="Mejor rendimiento" />
          <FormControlLabel value="claridad" control={<Radio />} label="Mayor claridad y menos bugs ✅" />
          <FormControlLabel value="lineas" control={<Radio />} label="Menos líneas de código" />
        </RadioGroup>
        <Button sx={{ mt: 3 }} variant="outlined" onClick={handleQuizSubmit}>
          Verificar respuesta
        </Button>
        {showQuizResult && (
          <Box
            sx={{
              mt: 3,
              p: 2,
              bgcolor: quizAnswer === 'claridad' ? '#e8f5e9' : '#ffebee',
              color: quizAnswer === 'claridad' ? '#2e7d32' : '#c62828',
              borderRadius: 2,
              border: '1px solid',
              borderColor: quizAnswer === 'claridad' ? '#a5d6a7' : '#ef9a9a',
            }}
          >
            {quizAnswer === 'claridad'
              ? '✅ ¡Correcto! El tipado fuerte mejora la comprensión y evita errores.'
              : '❌ No es correcto. Intenta nuevamente y repasa los conceptos.'}
          </Box>
        )}
      </Paper>

      <Tooltip title="Aplica estas herramientas en tu día a día y verás resultados reales en la calidad del trabajo en equipo." arrow>
        <Typography align="center" sx={{ mt: 5, fontStyle: 'italic', color: 'text.secondary' }}>
          🚀 ¡Implementar buenas prácticas no es una opción, es una necesidad!
        </Typography>
      </Tooltip>
    </Box>
  );
};

export default SlideHerramientas;
