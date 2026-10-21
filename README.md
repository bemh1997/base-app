# 02-base-seccion5 — Sección 5: Angular Essentials

Continuación del curso en la **Sección 5**: se agregan navegación, comunicación entre componentes y gestión de personajes de DragonBall.

## 📌 Contenido de este módulo

- **Barra de navegación** — `RouterLink`, `RouterLinkActive` y activación exacta del enlace raíz.
- **Routing** — páginas de contador, héroe, DragonBall y DragonBall Super; ruta comodín que redirige al inicio.
- **Control flow** — `@for` con `track` y `$index`, y `@if` para mostrar contenido según el estado.
- **Comunicación entre componentes** — inputs requeridos y outputs tipados para agregar personajes.
- **Componentes reutilizables** — formulario de alta y lista de personajes.
- **Estado con Signals** — señales para los campos del formulario y la colección de personajes.
- **Servicio e inyección de dependencias** — `DragonballService` comparte y actualiza el estado.
- **Persistencia** — efectos de Angular sincronizan los personajes con LocalStorage.
- **Renderizado condicional** — class binding según el poder y estado vacío para la lista.
- **Hash routing** — `HashLocationStrategy` habilita rutas con fragmento.
- **Estilos** — Bootstrap 5.3 por CDN y clases utilitarias para el diseño.

## 🧠 Conceptos cubiertos

- Separación de componentes y responsabilidades.
- Signals (`signal`, `input`, `output`, `effect`) y estado compartido mediante un servicio.
- Persistencia del estado en LocalStorage.
- Navegación de Angular y estrategia de hash.
- Plantillas con control flow moderno y class binding.

> `LinkedSignal` y los despliegues también forman parte de los temas estudiados en la sección; este módulo describe los ejemplos implementados en el proyecto.

---

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.27.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
