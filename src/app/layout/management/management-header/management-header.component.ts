import { Component, Input, computed, inject } from '@angular/core';
import { ColorModeService } from '@coreui/angular';
import { LanguageConstant } from '../../../core/constants/language.constant';
import { AuthenticateService } from '../../../core/services/auth/authenticate.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management-header',
  templateUrl: './management-header.component.html',
  styleUrl: './management-header.component.scss'
})
export class ManagementHeaderComponent {
  @Input() sidebarId: string = 'sidebar1';

  langData: Record<string, Record<string, string>> = LanguageConstant;
  langCode = localStorage.getItem('language') ?? 'en';

  readonly #colorModeService = inject(ColorModeService);
  readonly authSvc = inject(AuthenticateService);
  readonly toast = inject(ToastrService);
  readonly router = inject(Router);
  readonly colorMode = this.#colorModeService.colorMode;

  readonly colorModes = [
    { name: 'light', text: 'Light', icon: 'cilSun' },
    { name: 'dark', text: 'Dark', icon: 'cilMoon' },
    { name: 'auto', text: 'Auto', icon: 'cilContrast' }
  ];
  
  readonly languageModes = [
    { name: 'en', text: 'English', icon: 'cifUs' },
    { name: 'lv', text: 'Latviski', icon: 'cifLv' }
  ];

  readonly icons = computed(() => {
    const currentMode = this.colorMode();
    return this.colorModes.find(mode=> mode.name === currentMode)?.icon ?? 'cilSun';
  });

  languageIcons = () => {
    const currentLang = this.getLang();
    return this.languageModes.find(mode=> mode.name === currentLang)?.icon ?? 'cilLanguage';
  };

  setLang(langName: string) {
    this.langCode = langName;
    localStorage.setItem('language', langName);
    window.location.reload();
  }

  getLang() {
    return this.langCode;
  }

  doLogout(event: Event) {
    event.preventDefault();
    this.authSvc.doLogout();
    this.router.navigate([''])
    this.toast.info('Bye bye!');
  }
}
