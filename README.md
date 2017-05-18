# angularx-components

**Work in progress** - the library current includes only a basic table component and no unit tests

A collection of useful, reusable Angular Components

For Angular 2 and above

Supplied in UMD Bundle format through NPM

https://www.npmjs.com/package/angularx-components  
https://github.com/edwardpayton/angularx-components

## Installation

To install this library, run:

```bash
$ npm install angularx-components --save
```

## Consuming the library

You can import the library in any Angular application by running:

```bash
$ npm install angularx-components --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the library
import { ComponentsModule } from 'angularx-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify the library as an import
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```typescript
import { TableComponent } from 'angularx-components';
```

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<table-component></table-component>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Edward Payton](mailto:edwardjpayton@gmail.com)
