import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  public size = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  public ngOnInit(): void {
    this.size = this.route.snapshot.url[0].path;
  }

  public goBack() {
    this.router.navigate(['']);
  }
}
