import "bootstrap/dist/js/bootstrap.min.js";
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { App } from './app/app';
import { provideRouter } from "@angular/router";
import { routes } from "./app/app.routes";

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch())
  ]

}).catch(err => console.error(err));
