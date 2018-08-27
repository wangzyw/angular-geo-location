import {AuthService, FacebookLoginProvider, SocialUser} from 'angularx-social-login';

import { Component} from '@angular/core';

@Component({
  selector: 'fb-map-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  user: SocialUser;
  constructor(private authService: AuthService) {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
}
