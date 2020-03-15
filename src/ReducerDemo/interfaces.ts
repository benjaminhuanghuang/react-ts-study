export interface IAction{
  type: string
  payload: any
}
export interface IState {
  episodes:  Array<IEpisode>;
  favorites: Array<any>;
}

export interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: { medium: string; original: string };
  name: string;
  number: string;
  runtime: string;
  season: string;
  summary: string;
  url: string;
}