import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationComponent } from './components/application/application.component';
import { DownloadComponent } from './components/download/download.component';

const routes: Routes = [
  {
    path: ':slug/download',
    component: DownloadComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }

export const routedComponents = [
  ApplicationComponent,
  DownloadComponent
]