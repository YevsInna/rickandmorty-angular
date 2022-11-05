export interface IInfo {
  count: number,
  pages: number,
  next: string,
  prev: null
}

export interface IResults{
  id: number,
  name: string,
  air_date: string,
  episode: string,
  characters: string[]
}

export interface IEpisode {
  info: IInfo,
  results: IResults[]
}

