import React, { useState } from 'react';

export default function SlideEstructuras() {
  const [showComparison, setShowComparison] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswerSubmit = () => {
    setShowFeedback(true);
  };

  const isCorrect = selectedAnswer === 'servicios';

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#1976d2'
    },
    subtitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '15px',
      display: 'flex',
      alignItems: 'center',
      color: '#333'
    },
    paragraph: {
      marginBottom: '16px',
      lineHeight: '1.6',
      color: '#555'
    },
    chip: {
      display: 'inline-block',
      padding: '6px 12px',
      margin: '4px 4px 4px 0',
      backgroundColor: '#e3f2fd',
      color: '#1976d2',
      borderRadius: '16px',
      fontSize: '0.875rem',
      fontWeight: '500'
    },
    chipSecondary: {
      backgroundColor: '#f3e5f5',
      color: '#7b1fa2'
    },
    chipSuccess: {
      backgroundColor: '#e8f5e8',
      color: '#2e7d32'
    },
    paper: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '20px',
      backgroundColor: '#fafafa'
    },
    pre: {
      fontSize: '14px',
      margin: 0,
      fontFamily: 'Consolas, Monaco, monospace',
      backgroundColor: '#f5f5f5',
      padding: '12px',
      borderRadius: '4px',
      overflow: 'auto'
    },
    button: {
      padding: '8px 16px',
      margin: '8px 8px 8px 0',
      border: '1px solid #1976d2',
      backgroundColor: 'white',
      color: '#1976d2',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px'
    },
    buttonPrimary: {
      backgroundColor: '#1976d2',
      color: 'white'
    },
    accordion: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      marginBottom: '20px'
    },
    accordionHeader: {
      padding: '16px',
      backgroundColor: '#f5f5f5',
      cursor: 'pointer',
      borderBottom: '1px solid #ddd',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    accordionContent: {
      padding: '16px'
    },
    errorSection: {
      backgroundColor: '#ffebee',
      border: '1px solid #f44336',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px'
    },
    successSection: {
      backgroundColor: '#e8f5e8',
      border: '1px solid #4caf50',
      borderRadius: '8px',
      padding: '16px'
    },
    testSection: {
      backgroundColor: '#f0f7ff',
      border: '1px solid #2196f3',
      borderRadius: '8px',
      padding: '20px',
      marginBottom: '20px'
    },
    radioGroup: {
      marginBottom: '16px'
    },
    radioItem: {
      display: 'block',
      marginBottom: '8px',
      cursor: 'pointer'
    },
    alert: {
      padding: '12px',
      borderRadius: '4px',
      marginTop: '16px'
    },
    alertSuccess: {
      backgroundColor: '#d4edda',
      border: '1px solid #c3e6cb',
      color: '#155724'
    },
    alertError: {
      backgroundColor: '#f8d7da',
      border: '1px solid #f5c6cb',
      color: '#721c24'
    },
    tip: {
      padding: '16px',
      backgroundColor: '#fff3e0',
      border: '1px solid #ff9800',
      borderRadius: '8px',
      marginTop: '20px',
      fontSize: '0.875rem'
    },
    divider: {
      height: '1px',
      backgroundColor: '#ddd',
      margin: '24px 0'
    },
    icon: {
      marginRight: '8px',
      fontSize: '1.2em'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        🏗️ ¿Por qué estructurar tu código?
      </h1>

      <p style={styles.paragraph}>
        Imagina trabajar en un proyecto donde encontrar una función específica toma 30 minutos, 
        donde cambiar una regla de negocio implica tocar 10 archivos diferentes, o donde 
        agregar una nueva funcionalidad significa reescribir medio sistema. Esto no es ficción: 
        es la realidad de muchos proyectos mal estructurados.
      </p>

      <p style={styles.paragraph}>
        La arquitectura por capas no es solo una "buena práctica", es la diferencia entre 
        un proyecto escalable y mantenible, y uno que se convierte en una pesadilla técnica. 
        Separar responsabilidades permite que cada parte del sistema tenga un propósito claro 
        y único, facilitando el testing, debugging y evolución del código.
      </p>

      <div style={styles.divider}></div>

      <h2 style={styles.subtitle}>
        <span style={styles.icon}>🔧</span>
        Backend Moderno con FastAPI
      </h2>

      <p style={styles.paragraph}>
        Un backend estructurado usando FastAPI (generado desde Swagger Editor) sigue 
        una arquitectura clara donde cada capa tiene responsabilidades específicas:
      </p>

      <div style={{ marginBottom: '24px' }}>
        <div style={{...styles.chip}}>Controladores (/controllers)</div>
        <p style={{...styles.paragraph, marginLeft: '16px', fontSize: '0.9rem'}}>
          Manejan las peticiones HTTP, validan entrada, formatean respuestas. Son el punto 
          de entrada pero NO contienen lógica de negocio.
        </p>

        <div style={{...styles.chip, ...styles.chipSecondary}}>Servicios (/services)</div>
        <p style={{...styles.paragraph, marginLeft: '16px', fontSize: '0.9rem'}}>
          Corazón de la aplicación. Aquí vive toda la lógica de negocio, validaciones 
          complejas, orquestación de operaciones y reglas del dominio.
        </p>

        <div style={{...styles.chip, ...styles.chipSuccess}}>Repositorios/DAO (/repositories)</div>
        <p style={{...styles.paragraph, marginLeft: '16px', fontSize: '0.9rem'}}>
          Abstracción del acceso a datos. Consultas SQL, operaciones CRUD, 
          mapeo de entidades. Independientes del ORM usado.
        </p>
      </div>

      <div style={styles.paper}>
        <h3 style={{ marginTop: 0, marginBottom: '12px', fontSize: '1rem' }}>
          📁 Estructura Backend FastAPI:
        </h3>
        <pre style={styles.pre}>{`backend/
├── app/
│   ├── controllers/
│   │   ├── user_controller.py
│   │   └── product_controller.py
│   ├── services/
│   │   ├── user_service.py
│   │   └── business_logic/
│   ├── repositories/
│   │   ├── user_repository.py
│   │   └── database/
│   ├── models/
│   │   ├── user_model.py
│   │   └── schemas/
│   └── main.py
└── tests/`}</pre>
      </div>

      <h3 style={styles.subtitle}>
        <span style={styles.icon}>💻</span>
        Frontend Estructurado (React/Angular)
      </h3>

      <p style={styles.paragraph}>
        El frontend también se beneficia de una arquitectura modular. En React o Angular, 
        separamos componentes reutilizables, servicios para lógica compartida, modelos 
        con tipado fuerte (TypeScript), y rutas organizadas por módulos funcionales.
      </p>

      <div style={styles.paper}>
        <h3 style={{ marginTop: 0, marginBottom: '12px', fontSize: '1rem' }}>
          📁 Estructura Frontend React/TypeScript:
        </h3>
        <pre style={styles.pre}>{`frontend/
├── src/
│   ├── components/
│   │   ├── common/
│   │   └── feature-specific/
│   ├── services/
│   │   ├── api.service.ts
│   │   └── user.service.ts
│   ├── models/
│   │   ├── user.interface.ts
│   │   └── api.types.ts
│   ├── hooks/
│   ├── utils/
│   └── pages/
│       └── user/
└── tests/`}</pre>
      </div>

      <button 
        style={styles.button}
        onClick={() => setShowComparison(!showComparison)}
      >
        {showComparison ? 'Ocultar' : 'Ver'} Comparación: Mal vs Bien Estructurado
      </button>

      {showComparison && (
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ color: '#d32f2f', marginBottom: '12px' }}>
            ❌ Código Mal Estructurado:
          </h3>
          <div style={styles.errorSection}>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              • Todo en un solo archivo gigante (1000+ líneas)<br/>
              • Lógica de BD mezclada con controladores<br/>
              • Sin tipado, variables globales por doquier<br/>
              • Funciones que hacen 5 cosas diferentes<br/>
              • Imposible testear unitariamente<br/>
              • Cada cambio rompe algo más
            </p>
          </div>

          <h3 style={{ color: '#2e7d32', marginBottom: '12px' }}>
            ✅ Código Bien Estructurado:
          </h3>
          <div style={styles.successSection}>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              • Responsabilidad única por clase/función<br/>
              • Capas independientes y testeables<br/>
              • Tipado fuerte, interfaces bien definidas<br/>
              • Fácil localizar y modificar funcionalidades<br/>
              • Testing unitario y de integración sencillo<br/>
              • Cambios aislados sin efectos colaterales
            </p>
          </div>
        </div>
      )}

      <div style={styles.accordion}>
        <div style={styles.accordionHeader}>
          <span>🔧 Ejemplo: Flujo completo "Crear Usuario"</span>
        </div>
        <div style={styles.accordionContent}>
          <p style={styles.paragraph}>
            <strong>1. Controlador:</strong> Recibe POST /users, valida formato JSON<br/>
            <strong>2. Servicio:</strong> Valida reglas de negocio (email único, password seguro)<br/>
            <strong>3. Repositorio:</strong> Ejecuta INSERT en base de datos<br/>
            <strong>4. Respuesta:</strong> Usuario creado con ID generado
          </p>
          <div style={{ backgroundColor: '#f5f5f5', padding: '12px', borderRadius: '4px' }}>
            <pre style={{ margin: 0, fontSize: '0.85rem' }}>
{`# Controller
@app.post("/users")
async def create_user(user_data: UserCreate):
    return await user_service.create_user(user_data)

# Service  
async def create_user(user_data: UserCreate):
    if await self.email_exists(user_data.email):
        raise ValueError("Email ya existe")
    return await user_repository.save(user_data)

# Repository
async def save(self, user_data: UserCreate):
    query = "INSERT INTO users..."
    return await database.execute(query)`}
            </pre>
          </div>
        </div>
      </div>

      <div style={styles.testSection}>
        <h3 style={{ marginTop: 0, marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
          <span style={styles.icon}>❓</span>
          Mini Test: Arquitectura FastAPI
        </h3>
        
        <p style={styles.paragraph}>
          ¿En qué capa debería estar la lógica de negocio en FastAPI?
        </p>

        <div style={styles.radioGroup}>
          <label style={styles.radioItem}>
            <input 
              type="radio" 
              name="answer" 
              value="controladores"
              checked={selectedAnswer === 'controladores'}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              style={{ marginRight: '8px' }}
            />
            Controladores - Manejan rutas HTTP
          </label>
          <label style={styles.radioItem}>
            <input 
              type="radio" 
              name="answer" 
              value="servicios"
              checked={selectedAnswer === 'servicios'}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              style={{ marginRight: '8px' }}
            />
            Servicios - Contienen reglas del dominio
          </label>
          <label style={styles.radioItem}>
            <input 
              type="radio" 
              name="answer" 
              value="repositorios"
              checked={selectedAnswer === 'repositorios'}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              style={{ marginRight: '8px' }}
            />
            Repositorios - Acceso a base de datos
          </label>
        </div>

        <button 
          style={{...styles.button, ...styles.buttonPrimary}}
          onClick={handleAnswerSubmit}
          disabled={!selectedAnswer}
        >
          Verificar Respuesta
        </button>

        {showFeedback && (
          <div style={{
            ...styles.alert,
            ...(isCorrect ? styles.alertSuccess : styles.alertError)
          }}>
            {isCorrect ? (
              <div>
                <strong>¡Correcto!</strong> Los servicios contienen toda la lógica de negocio. 
                Los controladores solo manejan HTTP y los repositorios solo acceso a datos.
              </div>
            ) : (
              <div>
                <strong>Incorrecto.</strong> La lógica de negocio debe estar en los servicios, 
                manteniendo controladores y repositorios enfocados en sus responsabilidades específicas.
              </div>
            )}
          </div>
        )}
      </div>

      <div style={styles.tip}>
        💡 <strong>Pro Tip:</strong> Usa dependency injection en FastAPI con <code>Depends()</code> 
        para inyectar servicios en controladores y repositorios en servicios. Esto hace el código 
        más testeable y desacoplado.
      </div>
    </div>
  );
}