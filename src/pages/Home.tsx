import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Bienvenido al Webinar: Del Caos al Código Limpio
      </Typography>
      <Typography variant="body1" paragraph>
        Aprende a trabajar en equipo con código claro, documentado y probado.
      </Typography>
      <Button variant="contained" component={Link} to="/agenda">
        Ver Agenda
      </Button>
    </Container>
  );
}
