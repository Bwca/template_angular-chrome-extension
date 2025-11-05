# Angular Chrome Extension Template

This is a template for creating Chrome extensions using Angular + tsup. It provides a complete setup with background scripts, content scripts, and extension services.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.8.

## Chrome Extension Setup

### 1. Configure Your Extension

Edit `src/manifest.json` to customize your extension:
- Replace `{{EXTENSION_NAME}}` with your extension name
- Replace `{{EXTENSION_DESCRIPTION}}` with your extension description
- Update `{{EXTENSION_VERSION}}` to your version
- Update `{{CONTENT_SCRIPT_MATCHES}}` with the URLs where your content script should run

### 2. Add Extension Icon

Add a `128.png` icon file to the `public/` directory. This will be used as your extension's icon.

### 3. Build the Extension

```bash
npm run build:extension
```

This will build both the Angular app and bundle the extension scripts using tsup.

### 4. Load in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" in the top right
3. Click "Load unpacked" and select the `dist/template-angular-chrome-extension/browser/` directory

### Extension Structure

- `src/extension-scripts/background.ts` - Background service worker
- `src/extension-scripts/content.ts` - Content script that runs on web pages
- `src/manifest.json` - Extension manifest configuration

### Development Workflow

```bash
# Watch mode for development (rebuilds on changes)
npm run watch:extension

# Build for production
npm run build:extension
```

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

### Angular App Only

To build just the Angular app, run:

```bash
ng build
```

### Chrome Extension

To build the complete Chrome extension (Angular app + extension scripts), run:

```bash
npm run build:extension
```

This will compile your Angular project and bundle the extension scripts using tsup. The build artifacts will be stored in the `dist/template-angular-chrome-extension/browser/` directory, ready to be loaded as an unpacked extension in Chrome.

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
