// export interface IEpisode{
//   id: number,
//   name: string,
//   air_date: string,
//   episode: string,
//   characters: string[]
// }


export interface APIResponse<T> {
  results: T;
}
export interface DataResponse {
  characters: APIResponse<ICharacter[]>;
  episodes: APIResponse<IEpisode[]>;
}


export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;

}
