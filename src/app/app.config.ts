import { ApplicationConfig, Injectable, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from './core/service/auth-service.service';
import { InMemoryScrollingOptions, InMemoryScrollingFeature, withInMemoryScrolling, provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { FakeBackendProvider } from './core/helpers/fake-backend';
import { IntroPlatformService } from './core/services/api/intro-platform.service';
import { rootReducer } from './store';
import { AuthenticationEffects } from './store/authentication/authentication.effects';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.session;
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(request);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        // Handle error here
        console.error('Error intercepted:', err);
        return throwError(() => err);
      })
    );
  }
}

// Scroll configuration
const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

// Application Configuration
export const appConfig: ApplicationConfig = {
  providers: [
    FakeBackendProvider,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, inMemoryScrollingFeature),
    provideStore(rootReducer),
    provideEffects(AuthenticationEffects),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    IntroPlatformService,
  ],
};
