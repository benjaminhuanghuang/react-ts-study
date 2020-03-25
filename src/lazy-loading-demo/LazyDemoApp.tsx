import React, { Component, lazy, Suspense } from "react";

import Loading from "./Loading";

const About = lazy(() => import(/* webpackChunkName: "about"*/ "./About"));

export default class LazyDemoApp extends Component {
  state = {
    hasError : false
  }
  // Error handling method 1
  componentDidCatch(){
    this.setState({
      hasError: true
    })
  }
  // Error handling method 2
  static getDerivedStateFromError(){
    return {
      hasError: true
    }
  }
  render() {
    if (this.state.hasError){
      return <h1>Error </h1>
    }
    return (
      <div>
        <Suspense fallback={<Loading />}>
          <About />
        </Suspense>
      </div>
    );
  }
}
