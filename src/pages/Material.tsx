import { Container, Typography, Link as MuiLink } from '@mui/material';

export default function Material() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Material Complementario
      </Typography>
      <Typography>
        📚 <strong>Repositorio con código de ejemplo:</strong><br />
        <MuiLink href="https://github.com/tuusuario/webinar-backend-colaborativo" target="_blank">
          GitHub - Webinar Backend
        </MuiLink>
      </Typography>
      <Typography sx={{ mt: 2 }}>
        🧪 <strong>Guía de pruebas unitarias con Pytest:</strong><br />
        <MuiLink href="https://docs.pytest.org/en/stable/" target="_blank">
          Documentación oficial Pytest
        </MuiLink>
      </Typography>
      <Typography sx={{ mt: 2 }}>
        📘 <strong>Documentación Swagger/OpenAPI:</strong><br />
        <MuiLink href="https://swagger.io/specification/" target="_blank">
          swagger.io/specification
        </MuiLink>
      </Typography>
    </Container>
  );
}
