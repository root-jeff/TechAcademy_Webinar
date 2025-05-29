import React, { useState } from "react";
import {
  Typography,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
  IconButton,
  useTheme,
} from "@mui/material";
import { Close, FileDownload, CardMembership } from "@mui/icons-material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function GenerarCerficiadoComponent() {
  const [openDialog, setOpenDialog] = useState(false);
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ nombre: false, email: false });
  const theme = useTheme();

  const validateForm = () => {
    const newErrors = {
      nombre: nombreCompleto.trim().length < 2,
      email:
        email.trim() !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()),
    };
    setErrors(newErrors);
    return !newErrors.nombre && !newErrors.email;
  };

  const generateCertificate = async () => {
    if (!validateForm()) return;

    const container = document.createElement("div");
    container.innerHTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Certificado XtrimUP Tech Academy</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600&display=swap');
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #82007C 0%, #D24AE0 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }
          .certificate {
            width: 800px;
            height: 600px;
            background: #FFFFFF;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(130, 0, 124, 0.15);
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 120px 40px 120px 40px; /* Aumentado arriba y abajo */
          }
          .certificate::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, rgba(130, 0, 124, 0.05) 0%, rgba(210, 74, 224, 0.05) 100%);
            pointer-events: none;
          }
          .border-decoration {
            position: absolute;
            top: 20px;
            left: 20px;
            right: 20px;
            bottom: 20px;
            border: 3px solid #82007C;
            border-radius: 15px;
            background: radial-gradient(circle at top right, rgba(130, 0, 124, 0.1), transparent 50%),
                        radial-gradient(circle at bottom left, rgba(210, 74, 224, 0.1), transparent 50%);
          }
          .content {
            position: relative;
            z-index: 2;
          }
          .logo {
            width: 80px;
            height: 80px;
            background: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 30px;
            box-shadow: 0 10px 30px rgba(130, 0, 124, 0.3);
            overflow: hidden;
          }
          .logo img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .title {
            font-family: 'Playfair Display', serif;
            font-size: 48px;
            font-weight: 700;
            color: #333333;
            margin-bottom: 20px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.05);
          }
          .subtitle {
            font-size: 18px;
            color: #666666;
            margin-bottom: 40px;
            font-weight: 300;
          }
          .recipient {
            font-family: 'Playfair Display', serif;
            font-size: 36px;
            font-weight: 400;
            color: #82007C;
            margin: 30px 0;
            padding: 0 20px;
            border-bottom: 2px solid #82007C;
            display: inline-block;
            min-width: 400px;
          }
          .achievement {
            font-size: 16px;
            color: #333333;
            margin: 30px 0;
            line-height: 1.6;
            max-width: 600px;
          }
          .course-name {
            font-weight: 600;
            color: #D24AE0;
            font-size: 18px;
          }
          .footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin-top: 30px;
            padding-top: 10px;
            border-top: 1px solid #CCCCCC;
          }
          .date {
            font-size: 14px;
            color: #666666;
            font-weight: 500;
          }
          .signature {
            text-align: center;
          }
          .signature-line {
            width: 200px;
            height: 2px;
            background: #82007C;
            margin-bottom: 0px;
          }
          .signature-text {
            font-size: 14px;
            color: #333333;
            font-weight: 500;
          }
          .watermark {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-45deg);
            font-size: 120px;
            font-weight: 100;
            color: rgba(130, 0, 124, 0.03);
            pointer-events: none;
            z-index: 1;
            font-family: 'Playfair Display', serif;
          }
        </style>
      </head>
      <body>
        <div id="cert-pdf" class="certificate">
          <div class="border-decoration"></div>
          <div class="watermark">CERTIFICADO</div>
          <div class="content">
            <div class="logo">
              <img src="/logo.png" alt="Logo XtrimUP" />
            </div>
            <h1 class="title">Certificado de Finalización</h1>
            <p class="subtitle">Se otorga el presente certificado a:</p>
            <div class="recipient">${nombreCompleto}</div>
            <div class="achievement">
              Por haber completado exitosamente el webinar
              <div class="course-name">Del Caos al Código Limpio</div>
              demostrando dedicación, compromiso y excelencia en el aprendizaje de las mejores prácticas de desarrollo.
            </div>
            <div class="footer">
              <div class="date">
                Fecha de emisión: ${new Date().toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div class="signature">
                <div class="signature-text">XtrimUP Tech Academy</div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

    document.body.appendChild(container);

    const certificateElement = container.querySelector(
      "#cert-pdf"
    ) as HTMLElement;

    if (!certificateElement) return;

    const canvas = await html2canvas(certificateElement, {
      scale: 2, // mejora calidad
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("landscape", "pt", [820, 640]); // Asegúrate de usar las mismas dimensiones
    pdf.addImage(imgData, "PNG", 0, 0, 820, 640);
    pdf.save(`Certificado_XtrimUP_${nombreCompleto.replace(/\s+/g, "_")}.pdf`);
    document.body.removeChild(container);
    // Crear y descargar el archivo HTML
    // const blob = new Blob([certificateHTML], { type: "text/html" });
    // const url = window.URL.createObjectURL(blob);
    // const link = document.createElement("a");
    // link.href = url;
    // link.download = `Certificado_XtrimUP_${nombreCompleto.replace(
    //   /\s+/g,
    //   "_"
    // )}.html`;
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    // window.URL.revokeObjectURL(url);

    // Cerrar dialog y limpiar formulario
    setOpenDialog(false);
    setNombreCompleto("");
    setEmail("");
    setErrors({ nombre: false, email: false });
  };

  const alpha = (color: string, opacity: number) => {
    return `${color}${Math.round(opacity * 255)
      .toString(16)
      .padStart(2, "0")}`;
  };

  return (
    <Box sx={{ mx: "auto" }}>
      <Button
        variant="contained"
        size="large"
        startIcon={<CardMembership />}
        onClick={() => setOpenDialog(true)}
        sx={{
          flex: 1,
          py: { xs: 1.5, sm: 2 },
          fontSize: { xs: "1rem", sm: "1.1rem" },
          fontWeight: 600,
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
          "&:hover": {
            background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
            transform: "translateY(-2px)",
          },
        }}
      >
        Descargar Certificado
      </Button>

      {/* Dialog para generar certificado */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="sm"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              borderRadius: 3,
              backgroundImage: `linear-gradient(135deg, ${alpha(
                theme.palette.primary.main,
                0.05
              )}, ${alpha(theme.palette.secondary.main, 0.05)})`,
            },
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pb: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CardMembership
              sx={{ mr: 2, color: theme.palette.primary.main, fontSize: 28 }}
            />
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, color: theme.palette.text.primary }}
            >
              Generar Certificado
            </Typography>
          </Box>
          <IconButton onClick={() => setOpenDialog(false)} size="small">
            <Close />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ pt: 2 }}>
          <Alert severity="info" sx={{ mb: 3, borderRadius: 2 }}>
            Completa tus datos para generar tu certificado personalizado de
            XtrimUP Tech Academy
          </Alert>

          <TextField
            autoFocus
            margin="dense"
            label="Nombre Completo"
            type="text"
            fullWidth
            variant="outlined"
            value={nombreCompleto}
            onChange={(e) => setNombreCompleto(e.target.value)}
            error={errors.nombre}
            helperText={
              errors.nombre
                ? "Por favor ingresa tu nombre completo (mínimo 2 caracteres)"
                : ""
            }
            sx={{ mb: 2 }}
          />

          <TextField
            margin="dense"
            label="Correo Electrónico"
            type="email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            helperText={
              errors.email
                ? "Por favor ingresa un correo electrónico válido"
                : "Para futuras comunicaciones (opcional)"
            }
          />
        </DialogContent>

        <DialogActions sx={{ p: 3, pt: 1 }}>
          <Button onClick={() => setOpenDialog(false)} sx={{ mr: 1 }}>
            Cancelar
          </Button>
          <Button
            onClick={generateCertificate}
            variant="contained"
            startIcon={<FileDownload />}
            disabled={!nombreCompleto.trim()}
            sx={{
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              "&:hover": {
                background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
              },
            }}
          >
            Generar Certificado
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
