import { Typography, Button, Box } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function SlideDespedida() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        🚀 ¡Gracias por acompañarnos!
      </Typography>

      <Typography paragraph>
        Hemos recorrido un camino desde el caos al código limpio. Esto no termina aquí:
        lleva lo aprendido a tu día a día y compártelo con tu equipo.
      </Typography>

      <Typography paragraph>
        Nos vemos en los próximos módulos de XtrimUP Tech Academy. El viaje apenas empieza.
      </Typography>

      <Button variant="contained" endIcon={<EmojiEmotionsIcon />}>Continuar aprendiendo</Button>

      <Typography variant="caption" display="block" mt={2}>
        🌱 Mejores prácticas = mejores productos = equipos más felices.
      </Typography>
    </Box>
  );
}
