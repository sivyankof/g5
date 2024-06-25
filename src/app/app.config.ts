import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire/compat';

export const firebaseConfig = {
  apiKey: 'AIzaSyDX31DIUF3Nx-sm__C3-iu1h3B8LfTIA20',
  authDomain: 'g5githib.firebaseapp.com',
  projectId: 'g5githib',
  storageBucket: 'g5githib.appspot.com',
  messagingSenderId: '654658997271',
  appId: '1:654658997271:web:04d511d8cedb1fdb262052',
  measurementId: 'G-Y2Y765NDCG',
};
export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(AngularFireModule.initializeApp(firebaseConfig)),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([CommonModule, NgbPaginationModule, NgbAlertModule])],
};
