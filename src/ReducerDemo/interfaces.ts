export interface IAction{
  type: string
  payload: any
}
export interface IState {
  episodes:  Array<IEepisode>;
  favorites: Array<any>;
}

export interface IEepisode {
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