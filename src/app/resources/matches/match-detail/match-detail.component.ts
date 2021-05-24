import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Match } from 'src/app/common/interface/match';
import { MatchService } from 'src/app/common/services/match.service';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent implements OnInit {
  match: Match | undefined;

  constructor(
    private matchService: MatchService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;

    this.matchService.show(id).subscribe((res: Match) => {
      this.match = res;
    })
  }

}
