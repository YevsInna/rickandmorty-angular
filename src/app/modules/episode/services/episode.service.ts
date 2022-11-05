import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IEpisode} from "../interfaces";
import {urls} from "../../../configs";

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IEpisode[]>{
    return this.httpClient.get<IEpisode[]>(urls.episode);
  }

  getById(id: number): Observable<IEpisode>{
    return this.httpClient.get<IEpisode>(`${urls.episode}/${id}`)
  }
}
