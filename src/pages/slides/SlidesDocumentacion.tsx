import { useState } from "react";

export default function SlideDocumentacion() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [expandedSection, setExpandedSection] = useState("");

  const handleAnswerSelect = (answer: any) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
  };

  const resetQuiz = () => {
    setSelectedAnswer("");
    setShowFeedback(false);
  };

  const toggleSection = (section: any) => {
    setExpandedSection(expandedSection === section ? "" : section);
  };

  const accordionStyles = {
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    marginBottom: "12px",
    overflow: "hidden",
  };

  const accordionHeaderStyles = {
    padding: "16px",
    backgroundColor: "#f5f5f5",
    cursor: "pointer",
    borderBottom: "1px solid #e0e0e0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "background-color 0.2s",
  };

  const accordionContentStyles = {
    padding: "16px",
    backgroundColor: "white",
  };

  const codeBlockStyles = {
    backgroundColor: "#f8f9fa",
    border: "1px solid #e9ecef",
    borderRadius: "4px",
    padding: "16px",
    fontFamily: 'Monaco, Consolas, "Courier New", monospace',
    fontSize: "14px",
    lineHeight: "1.4",
    overflow: "auto",
    margin: "12px 0",
  };

  const buttonStyles = {
    padding: "12px 24px",
    margin: "8px 8px 8px 0",
    border: "2px solid #1976d2",
    borderRadius: "4px",
    backgroundColor: "white",
    color: "#1976d2",
    cursor: "pointer",
    fontSize: "16px",
    transition: "all 0.2s",
    textAlign: "left",
    minWidth: "120px",
  };

  const selectedButtonStyles = {
    ...buttonStyles,
    backgroundColor: "#1976d2",
    color: "white",
  };

  const alertStyles = {
    padding: "16px",
    borderRadius: "4px",
    margin: "16px 0",
    border: "1px solid",
  };

  const successAlertStyles = {
    ...alertStyles,
    backgroundColor: "#d4edda",
    borderColor: "#c3e6cb",
    color: "#155724",
  };

  const errorAlertStyles = {
    ...alertStyles,
    backgroundColor: "#f8d7da",
    borderColor: "#f5c6cb",
    color: "#721c24",
  };

  const infoAlertStyles = {
    ...alertStyles,
    backgroundColor: "#d1ecf1",
    borderColor: "#bee5eb",
    color: "#0c5460",
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          color: "#1976d2",
          fontSize: "2.5rem",
          marginBottom: "16px",
          fontWeight: "bold",
        }}
      >
        📚 La importancia de documentar
      </h1>

      <p
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.6",
          marginBottom: "24px",
          color: "#333",
        }}
      >
        La documentación es el puente entre el código que escribes hoy y el
        equipo que lo mantendrá mañana. Existen diferentes niveles que debes
        considerar para crear un ecosistema de información completo.
      </p>

      <div style={{ marginTop: "24px" }}>
        <h2 style={{ color: "#333", marginBottom: "16px", fontSize: "1.8rem" }}>
          📋 Los cuatro niveles de documentación
        </h2>

        {/* Nivel 1 */}
        <div style={accordionStyles}>
          <div
            style={{
              ...accordionHeaderStyles,
              backgroundColor:
                expandedSection === "codigo" ? "#e3f2fd" : "#f5f5f5",
            }}
            onClick={() => toggleSection("codigo")}
          >
            <h3 style={{ margin: 0, fontSize: "1.2rem" }}>
              1. 💻 Documentación <strong>dentro del código</strong>
            </h3>
            <span style={{ fontSize: "1.2rem" }}>
              {expandedSection === "codigo" ? "▼" : "▶"}
            </span>
          </div>
          {expandedSection === "codigo" && (
            <div style={accordionContentStyles}>
              <p style={{ marginBottom: "16px" }}>
                Docstrings, comentarios claros, JSDoc, Pydantic. El código debe
                ser autoexplicativo.
              </p>
              <div style={codeBlockStyles}>
                <strong>Ejemplo Python:</strong>
                <pre
                  style={{ margin: "8px 0 0 0" }}
                >{`def calcular_precio_total(precio_base: float, impuesto: float = 0.21) -> float:
    """
    Calcula el precio total incluyendo impuestos.
    
    Args:
        precio_base (float): Precio sin impuestos
        impuesto (float): Porcentaje de impuesto (default: 0.21)
    
    Returns:
        float: Precio total con impuestos incluidos
    
    Example:
        >>> calcular_precio_total(100, 0.21)
        121.0
    """
    return precio_base * (1 + impuesto)`}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Nivel 2 */}
        <div style={accordionStyles}>
          <div
            style={{
              ...accordionHeaderStyles,
              backgroundColor:
                expandedSection === "junto" ? "#e8f5e8" : "#f5f5f5",
            }}
            onClick={() => toggleSection("junto")}
          >
            <h3 style={{ margin: 0, fontSize: "1.2rem" }}>
              2. 📁 Documentación <strong>junto al código</strong>
            </h3>
            <span style={{ fontSize: "1.2rem" }}>
              {expandedSection === "junto" ? "▼" : "▶"}
            </span>
          </div>
          {expandedSection === "junto" && (
            <div style={accordionContentStyles}>
              <p style={{ marginBottom: "16px" }}>
                README, tutoriales internos, diagramas de arquitectura. Contexto
                del proyecto.
              </p>
              <div
                style={{
                  ...codeBlockStyles,
                  backgroundColor: "#f0f7ff",
                  border: "1px solid #bbdefb",
                }}
              >
                <strong>📋 Plantilla README:</strong>
                <ul style={{ margin: "8px 0 0 0", paddingLeft: "20px" }}>
                  <li>Descripción del proyecto</li>
                  <li>Instalación y configuración</li>
                  <li>Ejemplos de uso</li>
                  <li>Estructura de carpetas</li>
                  <li>Cómo contribuir</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Nivel 3 */}
        <div style={accordionStyles}>
          <div
            style={{
              ...accordionHeaderStyles,
              backgroundColor:
                expandedSection === "api" ? "#fff3e0" : "#f5f5f5",
            }}
            onClick={() => toggleSection("api")}
          >
            <h3 style={{ margin: 0, fontSize: "1.2rem" }}>
              3. 🔌 Documentación de <strong>consumo de API</strong>
            </h3>
            <span style={{ fontSize: "1.2rem" }}>
              {expandedSection === "api" ? "▼" : "▶"}
            </span>
          </div>
          {expandedSection === "api" && (
            <div style={accordionContentStyles}>
              <p style={{ marginBottom: "16px" }}>
                Swagger, Insomnia, Postman. Facilita la integración y testing.
              </p>
              <div
                style={{
                  ...codeBlockStyles,
                  backgroundColor: "#fff8e1",
                  border: "1px solid #ffcc02",
                }}
              >
                <strong>Configuración Swagger en Flask:</strong>
                <pre
                  style={{ margin: "8px 0 0 0" }}
                >{`from flasgger import Swagger, swag_from

app = Flask(__name__)
Swagger(app, template_file='swagger_config.yml')

@app.route('/users/<int:user_id>')
@swag_from('docs/get_user.yml')
def get_user(user_id):
    return jsonify({"id": user_id, "name": "Juan"})`}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Nivel 4 */}
        <div style={accordionStyles}>
          <div
            style={{
              ...accordionHeaderStyles,
              backgroundColor:
                expandedSection === "frontend" ? "#f3e5f5" : "#f5f5f5",
            }}
            onClick={() => toggleSection("frontend")}
          >
            <h3 style={{ margin: 0, fontSize: "1.2rem" }}>
              4. 🎨 Documentación del <strong>frontend</strong>
            </h3>
            <span style={{ fontSize: "1.2rem" }}>
              {expandedSection === "frontend" ? "▼" : "▶"}
            </span>
          </div>
          {expandedSection === "frontend" && (
            <div style={accordionContentStyles}>
              <p style={{ marginBottom: "16px" }}>
                Componentes, props, flujos visuales, diagramas de navegación.
              </p>
              <div
                style={{
                  ...codeBlockStyles,
                  backgroundColor: "#fce4ec",
                  border: "1px solid #f8bbd9",
                }}
              >
                <strong>Ejemplo TypeScript/React:</strong>
                <pre style={{ margin: "8px 0 0 0" }}>{`interface ButtonProps {
  /** Texto del botón */
  label: string;
  /** Variante visual del botón */
  variant?: 'primary' | 'secondary' | 'danger';
  /** Función que se ejecuta al hacer click */
  onClick: () => void;
  /** Si el botón está deshabilitado */
  disabled?: boolean;
}

/**
 * Botón reutilizable con diferentes variantes
 * @example
 * <Button label="Guardar" variant="primary" onClick={handleSave} />
 */
export const Button: React.FC<ButtonProps> = ({ ... }) => { ... }`}</pre>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Cuestionario */}
      <div
        style={{
          marginTop: "32px",
          padding: "24px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          border: "1px solid #dee2e6",
        }}
      >
        <h3
          style={{ color: "#1976d2", marginBottom: "16px", fontSize: "1.5rem" }}
        >
          🧠 Cuestionario: Pon a prueba tu conocimiento
        </h3>

        <p
          style={{
            fontWeight: "bold",
            marginBottom: "16px",
            fontSize: "1.1rem",
          }}
        >
          ¿Qué herramienta es ideal para probar y documentar visualmente tus
          endpoints?
        </p>

        <div style={{ marginBottom: "16px" }}>
          {["Git", "Postman", "VSCode"].map((option) => (
            <button
              key={option}
              style={
                selectedAnswer === option
                  ? (selectedButtonStyles as React.CSSProperties | undefined)
                  : (buttonStyles as React.CSSProperties | undefined)
              }
              onClick={() => handleAnswerSelect(option)}
            >
              {option} {option === "Postman" && selectedAnswer !== "" && "✅"}
            </button>
          ))}
        </div>

        {showFeedback && (
          <div
            style={
              selectedAnswer === "Postman"
                ? successAlertStyles
                : errorAlertStyles
            }
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div>
                {selectedAnswer === "Postman" ? (
                  <div>
                    <strong>¡Correcto! 🎉</strong>
                    <br />
                    Postman es excelente para probar endpoints, crear
                    colecciones de pruebas y generar documentación automática de
                    APIs.
                  </div>
                ) : (
                  <div>
                    <strong>Incorrecto.</strong>
                    <br />
                    {selectedAnswer === "Git" &&
                      "Git es para control de versiones, no para testing de APIs."}
                    {selectedAnswer === "VSCode" &&
                      "VSCode es un editor de código, aunque tiene extensiones para APIs."}
                    <br />
                    La respuesta correcta es <strong>Postman</strong>.
                  </div>
                )}
              </div>
              <button
                onClick={resetQuiz}
                style={{
                  padding: "6px 12px",
                  backgroundColor: "transparent",
                  border: "1px solid currentColor",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Reintentar
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recursos útiles */}
      <div
        style={{
          marginTop: "24px",
          padding: "16px",
          backgroundColor: "#e8f5e8",
          borderRadius: "8px",
          border: "1px solid #c8e6c9",
        }}
      >
        <h3 style={{ marginBottom: "12px", fontSize: "1.2rem" }}>
          🔗 Recursos útiles
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          <a
            href="https://swagger.io/specification/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1976d2", textDecoration: "none" }}
          >
            OpenAPI Specification
          </a>
          <a
            href="https://jsdoc.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1976d2", textDecoration: "none" }}
          >
            JSDoc Documentation
          </a>
          <a
            href="https://www.postman.com/api-documentation-tool/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1976d2", textDecoration: "none" }}
          >
            Postman API Documentation
          </a>
        </div>
      </div>

      {/* Tip final */}
      <div style={infoAlertStyles}>
        <h4 style={{ margin: "0 0 8px 0", fontSize: "1.1rem" }}>
          💡 <strong>Tip profesional:</strong>
        </h4>
        <p style={{ margin: 0, lineHeight: "1.5" }}>
          Siempre actualiza la documentación como parte de tu Definition of
          Done. Una feature no está completa hasta que su documentación refleje
          los cambios realizados. Tu yo del futuro (y tu equipo) te lo
          agradecerán.
        </p>
      </div>
    </div>
  );
}
