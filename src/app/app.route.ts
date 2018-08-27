import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { MapComponent } from './map/map.component';

export const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: '',  redirectTo: '/map', pathMatch: 'full' },
];

export const APP_ROUTER_PROVIDERS: ModuleWithProviders = RouterModule.forRoot(routes);
export const APP_ROUTER_COMPONENTS = [
  MapComponent
];

