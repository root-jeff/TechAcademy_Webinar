import {
  Typography,
  Paper,
  Box,
  Button,
  Tooltip,
  Grid,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import {
  Code,
  Groups,
  RocketLaunch,
  AutoAwesome,
  Engineering,
  Description,
  BugReport,
  Timeline,
} from '@mui/icons-material';

export default function SlideBienvenida() {
  const topicsList = [
    {
      icon: <Groups sx={{ color: '#4CAF50' }} />,
      title: 'Herramientas para colaborar eficientemente',
      description: 'Git, workflows y comunicación en equipo'
    },
    {
      icon: <Engineering sx={{ color: '#2196F3' }} />,
      title: 'Estructura de proyectos backend/frontend',
      description: 'Arquitecturas escalables y mantenibles'
    },
    {
      icon: <Description sx={{ color: '#FF9800' }} />,
      title: 'Buenas prácticas de documentación',
      description: 'Código autodescriptivo y APIs claras'
    },
    {
      icon: <BugReport sx={{ color: '#E91E63' }} />,
      title: 'Pruebas automatizadas y cobertura',
      description: 'Testing que realmente aporta valor'
    },
    {
      icon: <Timeline sx={{ color: '#9C27B0' }} />,
      title: 'Automatización con CI/CD',
      description: 'Despliegues seguros y automatizados'
    }
  ];

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        p: 4,
        color: 'white',
      }}
    >
      <Grid container spacing={4} maxWidth="1200px" mx="auto">
        {/* Header Section */}
        <Grid item xs={12}>
          <Box textAlign="center" mb={4}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mb: 2 }}>
              <RocketLaunch sx={{ fontSize: 48, color: '#FFD700' }} />
              <Typography 
                variant="h3" 
                component="h1"
                sx={{ 
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #FFD700, #FFA726)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                ¡Comienza tu evolución como desarrollador!
              </Typography>
              <Code sx={{ fontSize: 48, color: '#FFD700' }} />
            </Box>
            
            <Typography 
              variant="h6" 
              sx={{ 
                opacity: 0.9,
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Transforma tu manera de programar: del código caótico a soluciones elegantes y profesionales. 
              Descubre cómo los mejores desarrolladores construyen software que perdura y escala.
            </Typography>
          </Box>
        </Grid>

        {/* Motivation Section */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <AutoAwesome sx={{ color: '#FFD700' }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                ¿Por qué este taller?
              </Typography>
            </Box>
            
            <Typography paragraph sx={{ opacity: 0.9 }}>
              Sabemos que has enfrentado proyectos donde cada línea de código se siente como caminar en un campo minado. 
              Funciones interminables, nombres crípticos, y esa sensación de que todo se puede romper con un cambio.
            </Typography>
            
            <Typography sx={{ opacity: 0.9 }}>
              <strong>Hoy cambiamos esa historia.</strong> Te enseñaremos a crear código que tu yo del futuro te agradecerá, 
              y que tus compañeros de equipo entenderán sin necesidad de arqueología digital.
            </Typography>
          </Paper>
        </Grid>

        {/* Topics Overview */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              🎯 Lo que dominarás hoy:
            </Typography>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {['Colaboración', 'Arquitectura', 'Documentación', 'Testing', 'CI/CD'].map((topic, index) => (
                <Chip
                  key={index}
                  label={topic}
                  sx={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                />
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Detailed Topics */}
        <Grid item xs={12}>
          <Typography variant="h5" textAlign="center" sx={{ mb: 3, fontWeight: 'bold' }}>
            🚀 Tu hoja de ruta hacia la excelencia
          </Typography>
          
          <Grid container spacing={3}>
            {topicsList.map((topic, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                    }
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      {topic.icon}
                      <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
                        {topic.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      {topic.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Call to Action */}
        <Grid item xs={12}>
          <Box textAlign="center" mt={4}>
            <Tooltip 
              title="El primer paso hacia tu transformación profesional está a un clic de distancia"
              arrow
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<RocketLaunch />}
                sx={{
                  px: 6,
                  py: 2,
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #FFD700, #FFA726)',
                  color: '#1a1a1a',
                  borderRadius: 3,
                  textTransform: 'none',
                  boxShadow: '0 8px 25px rgba(255, 215, 0, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #FFA726, #FFD700)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 35px rgba(255, 215, 0, 0.4)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                ¡Comenzar mi transformación!
              </Button>
            </Tooltip>

            {/* Quote */}
            <Typography 
              variant="caption" 
              display="block" 
              sx={{ 
                mt: 4, 
                fontStyle: 'italic',
                opacity: 0.8,
                maxWidth: '600px',
                mx: 'auto',
                fontSize: '1rem',
              }}
            >
              💡 "El código limpio no se escribe siguiendo un conjunto de reglas. No se convierte en limpio 
              aplicando un puñado de principios. Se convierte en limpio mediante el trabajo duro y la experiencia." 
              - Robert C. Martin
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}