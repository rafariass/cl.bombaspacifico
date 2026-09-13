# 🌊 Bombas Pacífico

> **Bombas Pacífico**: Especialistas en motores eléctricos sumergibles, bombas de pozo profundo e insumos para aplicaciones hidráulicas. Ingeniería, asesoría, servicio y calidad al mejor precio del mercado.

---

## 📑 Tabla de contenidos

- [🌊 Bombas Pacífico](#-bombas-pacífico)
  - [📑 Tabla de contenidos](#-tabla-de-contenidos)
  - [📌 Descripción del Proyecto](#-descripción-del-proyecto)
  - [🚀 Requisitos](#-requisitos)
  - [🔧 Instalación](#-instalación)
  - [⚙️ Scripts disponibles](#-scripts-disponibles)
  - [📦 Dependencias y Tecnologías](#-dependencias-y-tecnologías)
    - [🌍 Producción](#-producción)
    - [💻 Desarrollo](#-desarrollo)
  - [📂 Estructura de Carpetas](#-estructura-de-carpetas)
  - [📄 Licencia](#-licencia)

---

## 📌 Descripción del Proyecto

**Bombas Pacífico** es una aplicación web moderna desarrollada con **React 19**, **Vite** y **Tailwind CSS v4**. Está optimizada para posicionamiento SEO, rendimiento rápido de carga y previsualización en redes sociales (Open Graph / Schema.org).

### Características Principales:
* ⚡ **Desarrollo ultra rápido** con Vite 8 y React 19.
* 🎨 **Estilos modernos y responsivos** impulsados por Tailwind CSS v4.
* 🔍 **Optimización SEO avanzada:** Metadatos Open Graph, Twitter Cards y etiquetas estructuradas Schema.org integradas en `index.html`.
* 🧹 **Calidad de código estricta:** Linter para JS/JSX con Standard JS y Linter CSS con Stylelint.
* 🤝 **Flujo de trabajo colaborativo:** Commits convencionales gestionados mediante Husky y Commitlint.

---

## 🚀 Requisitos

Asegúrate de contar con los siguientes entornos e instaladores configurados:

* **[Node.js](https://nodejs.org/)**: `v24.21.0` (definido en `.nvmrc` y `package.json`)
* **[pnpm](https://pnpm.io/)**: `v12.3.4`

Si utilizas un gestor de versiones como [nvm](https://github.com/nvm-sh/nvm) o [fnm](https://github.com/Schniz/fnm), puedes activar la versión recomendada ejecutando:

```bash
# Con nvm
nvm use

# Con fnm
fnm use
```

---

## 🔧 Instalación

Clona el repositorio e instala las dependencias del proyecto ejecutando:

```bash
pnpm install
```

---

## ⚙️ Scripts disponibles

En el proyecto puedes ejecutar los siguientes comandos:

| Comando | Descripción |
| :--- | :--- |
| `pnpm run dev` | Inicia el servidor de desarrollo local en `http://localhost:5173`. |
| `pnpm run lint` | Ejecuta la verificación de linteo de JavaScript (Standard JS) y CSS (Stylelint). |
| `pnpm run lint:js` | Verifica únicamente el código JavaScript/JSX con Standard JS. |
| `pnpm run lint:css` | Verifica únicamente las hojas de estilo con Stylelint. |
| `pnpm run build` | Compila y optimiza la aplicación para producción en la carpeta `dist/`. |
| `pnpm run preview` | Servidor local para previsualizar el build de producción generado. |

---

## 📦 Dependencias y Tecnologías

### 🌍 Producción

| Paquete | Versión | Badge |
| :--- | :---: | :---: |
| **react** | `19.2.8` | ![React](https://img.shields.io/badge/React-v19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black) |
| **react-dom** | `19.2.8` | ![React DOM](https://img.shields.io/badge/React_DOM-v19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black) |

### 💻 Desarrollo

| Paquete | Versión | Badge |
| :--- | :---: | :---: |
| **node** | `24.21.0` | ![Node.js](https://img.shields.io/badge/Node.js-v24.21.0-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) |
| **pnpm** | `12.3.4` | ![pnpm](https://img.shields.io/badge/pnpm-v12.3.4-F69220?style=for-the-badge&logo=pnpm&logoColor=white) |
| **vite** | `8.2.2` | ![Vite](https://img.shields.io/badge/Vite-v8.2.2-646CFF?style=for-the-badge&logo=vite&logoColor=white) |
| **tailwindcss** | `4.3.3` | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3.3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) |
| **@vitejs/plugin-react** | `6.1.0` | ![Vite React Plugin](https://img.shields.io/badge/Vite_React-v6.1.0-646CFF?style=for-the-badge&logo=vite&logoColor=white) |
| **standard** | `17.1.2` | ![Standard JS](https://img.shields.io/badge/Standard_JS-v17.1.2-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) |
| **stylelint** | `17.14.1` | ![Stylelint](https://img.shields.io/badge/Stylelint-v17.14.1-264DE4?style=for-the-badge&logo=stylelint&logoColor=white) |
| **husky** | `9.1.7` | ![Husky](https://img.shields.io/badge/Husky-v9.1.7-42B883?style=for-the-badge&logo=git&logoColor=white) |
| **@commitlint/cli** | `21.2.2` | ![Commitlint](https://img.shields.io/badge/Commitlint-v21.2.2-000000?style=for-the-badge&logo=commitlint&logoColor=white) |
| **lint-staged** | `17.4.1` | ![Lint Staged](https://img.shields.io/badge/Lint_Staged-v17.4.1-000000?style=for-the-badge&logo=git&logoColor=white) |

---

## 📂 Estructura de Carpetas

```text
cl.bombaspacifico/
├── .husky/                  # Git hooks automáticos (pre-commit, commit-msg, pre-push)
├── public/                  # Recursos estáticos públicos
│   └── favicon.svg          # Favicon oficial del sitio
├── src/                     # Código fuente principal de la aplicación
│   ├── App.jsx              # Componente principal de React
│   ├── main.css             # Importaciones globales y directivas CSS
│   └── main.jsx             # Punto de entrada y montaje en el DOM
├── commitlint.config.js     # Reglas para mensajes de commit (Conventional Commits)
├── .editorconfig            # Configuración de formato para editores de código
├── .gitignore               # Archivos y carpetas excluidos del control de versiones
├── .nvmrc                   # Definición de la versión de Node.js (v24.21.0)
├── .stylelintignore         # Archivos ignorados por Stylelint
├── .stylelintrc.json        # Reglas de linteo para CSS
├── index.html               # Plantilla HTML con SEO y metadatos de la marca
├── license.md               # Licencia MIT del proyecto
├── package.json             # Manifiesto del proyecto, dependencias y scripts
├── pnpm-lock.yaml           # Árbol de dependencias bloqueado por pnpm
├── pnpm-workspace.yaml      # Configuración del espacio de trabajo pnpm
├── tailwind.config.js       # Configuración del framework Tailwind CSS
└── vite.config.js           # Configuración del empaquetador Vite (alias `@` a `src`)
```

---

## 📄 Licencia

Este proyecto está bajo la Licencia **MIT**. Consulta el archivo [`license.md`](./license.md) para obtener más información.

---

Desarrollado por [RaFariasS](https://rafariass.dev) para [Bombas Pacífico](https://bombaspacifico.cl).
