import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './user/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'docs',
    loadChildren: () => import('./documentation/documentation.module').then(m => m.DocumentationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
