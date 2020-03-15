import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import * as serviceWorker from "./serviceWorker";
//
import { App } from "./App";
import TodoApp from "./TodoApp";
import ContextDemoApp from "./ContextDemoApp";
import ReducerHookDemoApp from "./ReducerHookDemoApp";
import ReducerDemoApp from "./ReducerDemo/ReducerDemoApp";
import FormikFormDemoApp from './FormikFormDemo/FormikFormDemoApp'

ReactDOM.render(<FormikFormDemoApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
