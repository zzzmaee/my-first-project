import {ApplicationConfig, provideZoneChangeDetection, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideStore} from "@ngrx/store";
import {counterReducer} from "./shared/store/counter/counter.reducer";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { blogReducer } from './shared/store/blog/blog.reducers';
import { AppState } from './shared/store/global/app.state';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore(AppState
  ), provideAnimationsAsync(), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
