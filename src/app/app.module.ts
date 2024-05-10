import { importProvidersFrom, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './content/main/main.module';
import { ManagementModule } from './content/management/management.module';
import { provideRouter, RouterModule, withEnabledBlockingInitialNavigation, withInMemoryScrolling, withRouterConfig, withViewTransitions } from '@angular/router';
import { DropdownModule, SidebarModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { CoreModule } from './core/core.module';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './content/shared/shared.module';
import { cilListNumbered, cilPaperPlane, cilSpeedometer, cilMenu, cilBell, cilList, cilEnvelopeOpen, cilGrid, cilInstitution, cilSitemap, cilBook, cilGroup, cilEducation, cilFactory, cilUser, cilCheck, cilSun, cilMoon, cilContrast, cilAccountLogout, cilSettings, cilLanguage, cifLv, cifUs, cilLockLocked, cilChevronDoubleLeft, cilChevronDoubleRight, cilChevronLeft, cilChevronRight, cilPlus, cilPencil, cilTrash } from '@coreui/icons';
import { logo } from './icons/logo';
import { sygnet } from './icons/sygnet';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    ManagementModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
  ],
  providers: [
    provideRouter(routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload'
      }),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      }),
      withEnabledBlockingInitialNavigation(),
      withViewTransitions()
    ),
    importProvidersFrom(SidebarModule, DropdownModule),
    IconSetService,
    { provide: LOCALE_ID, useValue: 'en-US' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(public iconSet: IconSetService) {
    iconSet.icons = {
      sygnet,
      logo,
      cilListNumbered,
      cilPaperPlane,
      cilSpeedometer,
      cilMenu,
      cilBell,
      cilList,
      cilEnvelopeOpen,
      cilGrid,
      cilInstitution,
      cilSitemap,
      cilBook,
      cilGroup,
      cilEducation,
      cilFactory,
      cilUser,
      cilCheck,
      cilSun,
      cilMoon,
      cilContrast,
      cilAccountLogout,
      cilSettings,
      cilLanguage,
      cilLockLocked,
      cilChevronDoubleLeft, 
      cilChevronLeft,
      cilChevronRight,
      cilChevronDoubleRight,
      cilPlus,
      cilPencil,
      cilTrash,
      cifLv,
      cifUs
    };
  }

 }
