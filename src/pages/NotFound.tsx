import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Container sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        404 - Página no encontrada
      </Typography>
      <Typography variant="body1" paragraph>
        Lo sentimos, no pudimos encontrar lo que buscas.
      </Typography>
      <Button variant="contained" component={Link} to="/">
        Volver al inicio
      </Button>
    </Container>
  );
}
