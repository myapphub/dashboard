import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from '../../models/application';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  app$?: Observable<Application | undefined>;

  constructor(
    private service: ApplicationService
  ) { }

  ngOnInit(): void {
    this.app$ = this.service.onAppChanged();

  }

}
