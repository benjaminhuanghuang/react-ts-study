## Reference
    - webpack + TypeScript + React
        - https://codeburst.io/webpack-typescript-react-part-1-dc154e250f23
        - https://github.com/larkintuckerllc/webpack-typescript-patterns

## Setup
```
    npm init
    npm install --save-dev webpack
    npm install --save-dev webpack-cli
    npm install --save-dev typescript
    npm install --save-dev awesome-typescript-loader

    npm install react react-dom @types/react @types/react-dom

    npm install --save-dev css-loader style-loader

    npm install antd
```
- Added webpack-cli based on new version of webpack (v4.x.x)
- Compared to an ES2015 project, we use the typescript package instead of babel-core and babel-preset-es2015 packages. Similarly, we use the awesome-typescript-loader instead of babel-loader
- Instead of a .babelrc file in ES2015 projects, we use a tsconfig.json to override the default TypeScript compiler options.


## ts config
```
{
    "compilerOptions": {
        "noImplicitAny": true,
        "target": "es5", 
        "sourceMap": true,
        "jsx": "react",
        "module": "ESNext",
        "moduleResolution": "node",
        "allowSyntheticDefaultImports": true
    }
}
```
- require the compiler to report errors on implied any types
- output ES5 JavaScript (compiler defaults to ES3)
- use the browser’s development tools to debug our TypeScript
- support react, convert .tsx file to .js 
- configure TypeScript to treat modules as ESNext modules 
- allwSyntheticDefaultImports property appears to enable TypeScript to treat CommonJS modules as ESNext modules; 
  allowing use to just use import React from ‘react’.

## Syntax


## Testing
