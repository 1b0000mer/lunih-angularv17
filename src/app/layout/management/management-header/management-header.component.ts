import { Component, Input, computed, inject } from '@angular/core';
import { ColorModeService } from '@coreui/angular';

@Component({
  selector: 'app-management-header',
  templateUrl: './management-header.component.html',
  styleUrl: './management-header.component.scss'
})
export class ManagementHeaderComponent {
  @Input() sidebarId: string = 'sidebar1';

  readonly #colorModeService = inject(ColorModeService);
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
    localStorage.setItem('lang', langName);
  }

  getLang() {
    return localStorage.getItem('lang') ?? 'en';
  }
}
