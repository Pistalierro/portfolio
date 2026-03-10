import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom} from '@angular/core';
import {TranslateLoader, TranslateModule, TranslateService, TranslateStore} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

export function initTranslate(translate: TranslateService) {
  return () => {
    const availableLangs: string[] = ['ru', 'ua', 'en', 'es', 'de'];
    translate.addLangs(availableLangs);
    translate.setDefaultLang('en');

    const storedLang = localStorage.getItem('lang');
    const browserLang = translate.getBrowserLang();
    const selectedLang = storedLang || browserLang || 'en';

    translate.use(availableLangs.includes(selectedLang) ? selectedLang : 'en');
  };
}

export function provideTranslate(): ApplicationConfig {
  return {
    providers: [
      importProvidersFrom(
        TranslateModule.forRoot({
          loader: {provide: TranslateLoader, useFactory: createTranslateLoader, deps: [HttpClient],},
        })
      ),
      TranslateStore,
      {provide: APP_INITIALIZER, useFactory: initTranslate, deps: [TranslateService], multi: true,},
    ],
  };
}
