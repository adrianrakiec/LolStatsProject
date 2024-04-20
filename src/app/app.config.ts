import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { MyHttpInterceptor } from './my-http-interceptor.interceptor';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(routes), importProvidersFrom(HttpClientModule), { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true }],
};
