import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withInMemoryScrolling} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getAuth, provideAuth} from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAXMTFyyjNneDeQQ4SH6WcwcJdlbTs4ArM',
  authDomain: 'portfolio-7bf66.firebaseapp.com',
  projectId: 'portfolio-7bf66',
  storageBucket: 'portfolio-7bf66.firebasestorage.app',
  messagingSenderId: '121589002779',
  appId: '1:121589002779:web:e1f7dceff73b2eb38c7ebe'
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })),
    provideAnimations(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ]
};
