import React from "react";

import { Store, StoreProvider } from "./ReducerDemoAppStore";
import { IAction, IEpisode } from "./interfaces";

import "./ReducerDemoApp.css";

const EpisodeList = React.lazy<any>(() => import("./EpisodesList"));

function RecuderDemoApp(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
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

  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favorites.includes(episode);
    let dispatchObj = {
      type: "ADD_FAV",
      payload: episode
    };
    if (episodeInFav) {
      const favWithoutEpisode = state.favorites.filter(
        (fav: IEpisode) => fav.id !== episode.id
      );
      dispatchObj = {
        type: "REMOVE_FAV",
        payload: favWithoutEpisode
      };
    }
    return dispatch(dispatchObj);
  };
  const props = {
    episodes: state.episodes,
    toggleFavAction,
    favorites: state.favorites
  };
  // console.log();
  return (
    <>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episode!!!</p>
        </div>
        <div>Farorite(s): {state.favorites.length}</div>
      </header>
      <React.Suspense fallback={<div>Loading</div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
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
