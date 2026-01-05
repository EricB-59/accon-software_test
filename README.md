# Directorio de Usuarios - Prueba Técnica

Esta aplicación es una solución al reto técnico para el puesto de Desarrollador Front-End. Consiste en una aplicación web que consume una API externa para mostrar un directorio de usuarios, permitiendo búsqueda en tiempo real y visualización de detalles mediante un modal.

## 🚀 Cómo arrancar el proyecto

Este proyecto utiliza **pnpm** como gestor de paquetes para mayor rapidez y eficiencia.

1.  **Instalar dependencias:**
    Asegúrate de estar en la carpeta raíz del proyecto y ejecuta:

    ```bash
    pnpm install
    ```

2.  **Iniciar servidor de desarrollo:**
    Para levantar el entorno local:

    ```bash
    pnpm dev
    ```

    La aplicación estará disponible en la URL que indique la terminal (usualmente `http://localhost:5173`).

3.  **Linting (Opcional):**
    Para verificar la calidad del código y reglas de TypeScript:
    ```bash
    pnpm lint
    ```

## 🛠 Stack Tecnológico

He seleccionado estas herramientas basándome en los requisitos de la oferta (React 18+, TypeScript) y buscando un equilibrio entre rendimiento y mantenibilidad:

- **React + Vite:** Para un entorno de desarrollo ágil y optimizado.
- **TypeScript:** Uso estricto de tipos e interfaces para garantizar la seguridad de datos y autocompletado.
- **TanStack Query (React Query):** Para la gestión eficiente del estado del servidor (fetching, caching, loading/error states).
- **Tailwind CSS:** Para un diseño de interfaz rápido, responsive y mantenible.
- **pnpm:** Como gestor de paquetes eficiente.

## ✨ Funcionalidades Implementadas

### Requerimientos Base

- ✅ **Listado de Usuarios:** Consumo de la API JSONPlaceholder (`/users`).
- ✅ **Diseño Responsive:** Visualización en Grid (tarjetas) adaptable a dispositivos móviles y escritorio.
- ✅ **Detalle de Usuario:** Modal interactivo que muestra información extendida (Compañía, Dirección, Contacto).
- ✅ **Manejo de Errores y Carga:** Feedback visual al usuario mediante estados de `loading` (spinners) y mensajes de error amigables.

### Bonus / Puntos Extra

- 🌟 **Filtrado por Nombre:** Implementación de un input de búsqueda que filtra los resultados en tiempo real.
- 🌟 **Custom Hook (`useUsers`):** Abstracción de la lógica de fetching en un hook reutilizable utilizando TanStack Query.
- 🌟 **Arquitectura Modular:** Separación clara de responsabilidades (UI vs Lógica).

## 📂 Estructura del Proyecto

El código sigue una arquitectura escalable y organizada:

```text
src/
├── components/   # Componentes reutilizables (UserCard, UserModal)
├── hooks/        # Lógica de negocio y Custom Hooks (useUsers)
├── types/        # Definiciones e Interfaces TypeScript (User, Address...)
├── App.tsx       # Componente principal e integración
└── main.tsx      # Punto de entrada y configuración de Providers
```
