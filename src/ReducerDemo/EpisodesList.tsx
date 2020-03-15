import React from "react";
import { IEpisode } from "./interfaces";

export default function EpisodesList(props: any): Array<JSX.Element> {
  const { episodes, toggleFavAction, favorites } = props;

  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        <img src={episode.image.medium} alt={`Rick and Mort ${episode.name}`} />
        <div>{episode.name}</div>
        <section>
          <div>Seasion: {episode.season} </div>
          <div>Number: {episode.number}</div>
          <button type="button" onClick={() => toggleFavAction(episode)}>
            {favorites.find((fav: IEpisode) => fav.id === episode.id)
              ? "Unfav"
              : "Fav"}
          </button>
        </section>
      </section>
    );
  });
}
