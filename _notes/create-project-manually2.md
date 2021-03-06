# Create project using Babel + Webpack
## Init project
```
npm init
```

## Install typescript locally
```
npm install typescript --save-dev
```

## Install React and TypeScript types for React
```
  npm install react react-dom
  npm install @types/react @types/react-dom --save-dev
```

## Install babel
```
  npm i @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
```
## Create .babelrc
```
  {
    "presets": ["@babel/evn", "@babel/react", "@babel/typescript"]
  }
```
## Craete /dist/index.html
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
  </head>
  <body>
    <div id="root"></div>
    <script src="bundle.js"></script>
  </body>
</html>
```
## Creating a React component /src/index.tsx 
```
  import * as React from "react";
  import * as ReactDOM from "react-dom";

  const App: React.SFC = () => {
    return <h1>My React App!</h1>;
  };

  ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
```
The tsx extension distinguishes TypeScript React components from vanilla JavaScript React components
 
React.SFC is a TypeScript type we can use for React omponents that don't have any internal state. 

## Add web pack
```
  npm install webpack webpack-cli --save-dev

  npm install webpack-dev-server --save-dev


  npm install babel-loader --save-dev
```

webpack.config.js
```
const path = require("path");
module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};

```
## Add script into package.json
```
{
  ...
  "scripts": {
    "start": "webpack-dev-server --env development",
    "build": "webpack --env production"
  },
  ...
}
```

## Start application
```
  npm run build
  npm start
```