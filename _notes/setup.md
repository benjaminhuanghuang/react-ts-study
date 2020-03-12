## Typescript setup
```
    sudo npm install -g typescript
    tsc -v
```
or
```
    npm install typescript --save-dev
```



## Create project
```
    npx create-react-app react-ts-study --typescript
```

## Typescript config for project
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




