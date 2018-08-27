import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NguiUtilsModule } from '@ngui/utils';
import { NguiMapModule } from '@ngui/map';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { Codeblock } from 'ng2-prism/codeblock';

import { APP_ROUTER_PROVIDERS, APP_ROUTER_COMPONENTS } from './app.route';

import { SocialLoginModule } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider  } from 'angularx-social-login';


const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('228546227856623')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SocialLoginModule,
    HttpClientModule,
    APP_ROUTER_PROVIDERS,
    // NguiMapModule,
    NguiMapModule.forRoot({
      apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDWPYBEET-ksjur3bo0VGdqejq9ncLJpqQ' +
      '&libraries=visualization,places,drawing',
    }),
    NguiUtilsModule
  ],
  declarations: [AppComponent, APP_ROUTER_COMPONENTS,
    NavbarComponent],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
