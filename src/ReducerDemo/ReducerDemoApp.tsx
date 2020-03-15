import React from "react";

import { Store, StoreProvider } from "./ReducerDemoAppStore";
import { IAction, IEepisode } from "./interfaces";

import "./ReducerDemoApp.css";

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

  const toggleFavAction = (episode: IEepisode): IAction => {
    const episodeInFav = state.favorites.includes(episode);
    let dispatchObj = {
      type: "ADD_FAV",
      payload: episode
    };
    if (episodeInFav) {
      const favWithoutEpisode = state.favorites.filter(
        (fav: IEepisode) => fav.id !== episode.id
      );
      dispatchObj = {
        type: "REMOVE_FAV",
        payload: favWithoutEpisode
      };
    }
    return dispatch(dispatchObj);
  };

  console.log();
  return (
    <>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episode!!!</p>
        </div>
        <div>
          Farorite(s): {state.favorites.length}
        </div>
      </header>
      <section className="episode-layout">
        {state.episodes.map((episode: any) => {
          return (
            <section className="episode-box" key={episode.id}>
              <img
                src={episode.image.medium}
                alt={`Rick and Mort ${episode.name}`}
              />
              <div>{episode.name}</div>
              <section>
                <div>Seasion: {episode.season} </div>
                <div>Number: {episode.number}</div>
                <button type="button" onClick={() => toggleFavAction(episode)}>
                  {state.favorites.find(
                    (fav: IEepisode) => fav.id === episode.id
                  )
                    ? "Unfav"
                    : "Fav"}
                </button>
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
