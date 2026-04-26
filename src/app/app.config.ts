import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'; // Verifique se precisa do provideBrowserGlobalErrorListeners ou se foi erro de digitação
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideZoneChangeDetection({ eventCoalescing: true }), // Comum no Angular 18/19+
    
    provideRouter(
      routes, 
      withInMemoryScrolling({ 
        anchorScrolling: 'enabled', 
        scrollPositionRestoration: 'enabled' 
      })
    ), // <--- A vírgula aqui é essencial e o withInMemoryScrolling fica dentro dos parênteses do provideRouter

    provideClientHydration(withEventReplay())
  ]
};