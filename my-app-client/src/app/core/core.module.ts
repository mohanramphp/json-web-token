import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { XHRBackend } from '@angular/http';
import { RequestOptions } from '@angular/http';

import { ApiXhrBackendService } from './api-xhr-backend.service';
import { DefaultRequestOptionsService } from './default-request-options.service';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
/**
 * CoreModule that you import once when the app starts and never import anywhere else.
 */
@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [
    {
      provide: XHRBackend,
      useClass: ApiXhrBackendService
    },
    {
      provide: RequestOptions,
      useClass: DefaultRequestOptionsService
    },
    AuthenticationService,
    AuthGuardService
  ]
})
export class CoreModule {

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}
