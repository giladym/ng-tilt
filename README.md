# NgTilt

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

This is an Angular facade for [vanilla-tilt.js](https://github.com/micku7zu/vanilla-tilt.js).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


### Install
```
npm install @types/vanilla-tilt
npm install vanilla-tilt  // Also available on npm https://www.npmjs.com/package/vanilla-tilt
```

## Usage
```html
<body>
<div class="your-element" appTilt [options]="TiltOptions"></div>
</body>
```
### License

MIT License
