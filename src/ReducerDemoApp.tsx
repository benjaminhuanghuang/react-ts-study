import React from "react";

import { Store, StoreProvider } from "./ReducerDemoAppStore";

function RecuderDemoApp(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    debugger;
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes
    });
  };
  return (
    <>
      <h1>Rick and Morty</h1>
      <p>Pick your favorite episode!!!</p>
      <section>
        {state.episodes.map((episod: any) => {
          return (
            <section key={episod.id}>
              <img
                src={episod.image.medium}
                alt={`Rick and Mort ${episod.name}`}
              />
              <div>{episod.name}</div>
              <section>
                Seasion: {episod.season} Number: {episod.number}
              </section>
            </section>
          );
        })}
      </section>
    </>
  );
}

export default function RecuderDemoAppContainer(): JSX.Element {
  return (
    <StoreProvider>
      <RecuderDemoApp />
    </StoreProvider>
  );
}
