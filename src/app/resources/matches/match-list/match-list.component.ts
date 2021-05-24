import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Match } from 'src/app/common/interface/match';
import { MatchService } from 'src/app/common/services/match.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss'],
  providers: [MatchService]
})
export class MatchListComponent implements OnInit {
  public matches: Match[] = [];

  constructor(
    private matchServices: MatchService
  ) { };

  ngOnInit(): void {
    this.matchServices.list().subscribe((res: Match[]) => {
      this.matches = res;
    })
  }

}
