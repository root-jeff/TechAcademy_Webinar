import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

export default function Agenda() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Agenda del Webinar
      </Typography>
      <List>
        {[
          'Introducción: qué veremos y por qué importa.',
          'Estructura de código en Flask y Angular.',
          'Buenas prácticas de documentación y entornos.',
          'Pruebas unitarias en Python/Flask y Angular.',
          'Casos reales y ejemplos prácticos.',
          'Preguntas, respuestas y cierre.'
        ].map((text, index) => (
          <ListItem key={index}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
