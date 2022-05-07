import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ApplicationRoutingModule, routedComponents } from './application-routing.module';
import { UserModule } from '../user/user.module';
import { FilesizePipe } from './pipes/filesize.pipe';


@NgModule({
  declarations: [
    ...routedComponents,
    FilesizePipe,
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    UserModule,
    NgbModule
  ]
})
export class ApplicationModule { }
