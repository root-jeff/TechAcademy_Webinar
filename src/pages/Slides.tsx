import { Container, Typography, Button, Box, Paper } from '@mui/material';
import { useState } from 'react';

import SlideBienvenida from './slides/SlideBienvenida';
import SlideEstructura from './slides/SlideEstructura';
import SlidePruebas from './slides/SlidesPrueba';
import SlideDocumentacion from './slides/SlidesDocumentacion';
import SlideHerramientas from './slides/SlidesHerramientas';
import SlideDespedida from './slides/SlidesDespedidas';

const slideComponents = [
  SlideBienvenida,
  SlideEstructura,
  SlideDocumentacion,
  SlidePruebas,
  SlideHerramientas,
  SlideDespedida,
];

export default function Slides() {
  const [index, setIndex] = useState(0);
  const CurrentSlide = slideComponents[index];

  const nextSlide = () => setIndex((prev) => Math.min(prev + 1, slideComponents.length - 1));
  const prevSlide = () => setIndex((prev) => Math.max(prev - 1, 0));

  return (
    <Container sx={{ mt: 4, mb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 1000, width: '100%' }}>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Slide {index + 1} de {slideComponents.length}
        </Typography>
        <CurrentSlide />
      </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4, width: '100%', maxWidth: 1000 }}>
        <Button onClick={prevSlide} disabled={index === 0} variant="outlined">
          Anterior
        </Button>
        <Button onClick={nextSlide} disabled={index === slideComponents.length - 1} variant="contained">
          Siguiente
        </Button>
      </Box>
    </Container>
  );
}
