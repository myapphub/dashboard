import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { StoreAppVersion } from '../../models/application';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  versions$?: Observable<StoreAppVersion[]>;

  constructor(
    private route: ActivatedRoute,
    private service: ApplicationService,
  ) { }

  ngOnInit(): void {
    const parent = this.route.parent;
    if (!parent) {
      return;
    }
    this.versions$ = parent.paramMap.pipe(
      switchMap(params => {
        const namespace_type = params.get('namespace_type') ?? '';
        const namespace = params.get('namespace') ?? '';
        const path = params.get('path') ?? ''
        return this.service.getStoresCurrentVersions(`${namespace_type}/${namespace}`, path);
    }));
  }

}
