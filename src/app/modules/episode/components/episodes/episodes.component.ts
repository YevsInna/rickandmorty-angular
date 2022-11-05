import {Component, OnInit} from '@angular/core';

import {IEpisode, IResults} from "../../interfaces";
import {EpisodeService} from "../../services";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  results: IResults[];

  constructor(private episodeService: EpisodeService) {
  }

  ngOnInit(): void {
    this.episodeService.getAll().subscribe(value => this.results = value)
  }

}
