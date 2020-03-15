import React from "react";
interface IAction{
  type: string
  payload: any
}
interface IState {
  episodes: [];
  favorites: [];
}
const initialState: IState = {
  episodes: [],
  favorites: []
};
export const Store = React.createContext<IState|any>(initialState);

function reducer(state: IState, action:IAction):IState {
  switch (action.type) {
    case 'FETCH_DATA':
      return {...state, episodes: action.payload};
    default:
      return state;
  }
}

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  debugger
  return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>;
}

