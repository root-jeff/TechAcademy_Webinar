# 📊 Webinar Slides React – Del Caos al Código Limpio

Presentación interactiva profesional desarrollada en React + Material UI para el webinar técnico **“Del Caos al Código Limpio”**, centrado en buenas prácticas de desarrollo backend en equipo.

## 🎯 Objetivo

Enseñar cómo estructurar código de forma profesional, documentarlo correctamente y aplicar pruebas unitarias efectivas en proyectos colaborativos, usando un stack moderno.

---

## 🧰 Tecnologías utilizadas

- ⚛️ **React + TypeScript**
- 🎨 **Material UI (MUI)** – Diseño responsive y limpio
- 📁 **Componentes modulares** por diapositiva
- 🌗 **Soporte para dark/light theme (en progreso)**
- 🧪 Enfocado en buenas prácticas reales para proyectos con:
  - Flask + Pytest
  - Angular + TypeScript
  - Docker
  - Bitbucket / Jira / Sourcetree

---

## 🚀 Instalación

```bash
npm install
npm run dev
```

Este proyecto usa [Vite](https://vitejs.dev/) para un entorno de desarrollo veloz.

---

## 📂 Estructura del proyecto

```
┣ 📂assets
┃ ┗ 📜react.svg
┣ 📂pages
┃ ┣ 📂slides
┃ ┃ ┣ 📜SlideBienvenida.tsx
┃ ┃ ┣ 📜SlideEstructura.tsx
┃ ┃ ┣ 📜SlidesDespedidas.tsx
┃ ┃ ┣ 📜SlidesDocumentacion.tsx
┃ ┃ ┣ 📜SlidesHerramientas.tsx
┃ ┃ ┗ 📜SlidesPrueba.tsx
┃ ┣ 📜Agenda.tsx
┃ ┣ 📜Home.tsx
┃ ┣ 📜Material.tsx
┃ ┣ 📜NotFound.tsx
┃ ┗ 📜Slides.tsx
┣ 📂theme
┃ ┗ 📜theme.tsx
┣ 📜App.tsx
┣ 📜main.tsx
┗ 📜vite-env.d.ts
```

Cada slide es un componente independiente para facilitar escalabilidad, pruebas y mantenimiento.

---

## 💡 ¿Qué incluye cada diapositiva?

✅ Titulares claros  
✅ Texto explicativo y educativo  
✅ Ejemplos de código reales (`<pre>` dentro de `<Paper>`)  
✅ Interacción ligera: `Accordion`, `Collapse`, `Tooltip`, `Button`  
✅ Íconos visuales de `@mui/icons-material`  
✅ Tips y reflexiones para el usuario  

---

## 🌟 ¿A quién está dirigido?

- Equipos de desarrollo backend que quieren colaborar mejor
- Desarrolladores que heredan código “caótico”
- Empresas que desean escalar sus proyectos de forma mantenible
- Cualquiera que quiera mejorar su práctica profesional como developer

---

## 📦 Próximos pasos

- [ ] Implementar navegación entre slides (con `React Router` o scroll snapping)
- [ ] Añadir modo oscuro/tema dinámico con `PaletteMode`
- [ ] Integrar pruebas automáticas sobre componentes clave

---

## 🙌 Autor

**Jefferson Palma**  
💼 Desarrollador Backend en Xtrim  
📣 Creador del webinar **Del Caos al Código Limpio**

---

## 📽️ ¿Quieres ver la presentación completa?

Disponible para equipos internos de Xtrim como parte de **XtrimUP Tech Academy** 🎓
