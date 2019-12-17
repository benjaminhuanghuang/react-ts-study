# React + TypeScript Learning Project

## Reference
-[webpack + TypeScript + React](https://codeburst.io/webpack-typescript-react-part-1-dc154e250f23)
    - https://github.com/larkintuckerllc/webpack-typescript-patterns

-[React Typescript Tutorial - Why and How (get started now!)]()

## Setup project
```
    npx create-react-app react-ts-study --typescript
```
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


## 
- Support scss
```
npm i -S node-sass
```