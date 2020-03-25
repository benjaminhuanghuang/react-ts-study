import React, { Component, PureComponent, memo } from "react";

interface MemoFooProps{
  name: string
  person:{
    age: number
  }
}

const MemoFoo = memo((props: MemoFooProps) =>{
  return (
  <div>{props.person.age}</div>
  )
})

/*
  提供简单props对比算法，避免组件rerendering
*/
class FooPure extends PureComponent<MemoFooProps> {
  // But it did INCORRECT on this.props.person.age
  render() {
    console.log('MemoFooPure Render')
    return (
      <div>
        {this.props.person.age}
      </div>
    )
  }
}

class Foo extends Component<MemoFooProps> {
  // Don't re-render when MemoDemoApp.state.count changing
  shouldComponentUpdate(nextProps:MemoFooProps): boolean{
    return nextProps.name !== this.props.name 
  }

  render() {
    console.log('MemoFoo Render')
    return (
      <div>
        {this.props.person.age}
      </div>
    )
  }
}

export default class MemoDemoApp extends Component {
  state ={
    count: 0,
    person :{
      age: 80
    }
  }


  render() {
    return (
      <div>
        <button type="button" onClick={()=>this.setState({count: this.state.count + 1})}>Count++ cause re-render</button>
        <button type="button" onClick={()=>this.setState({count: this.state.count + 1})}>Age++ cause re-render</button>
        <Foo name="Foo" person = {this.state.person}></Foo>
        <FooPure name="FooPure" person = {this.state.person}></FooPure>
        <MemoFoo name="MemoPure" person = {this.state.person}></MemoFoo>
      </div>
    );
  }
}
