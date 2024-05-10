import { INavData } from '@coreui/angular';
import { LanguageConstant } from '../../core/constants/language.constant';

const langData: Record<string, Record<string, string>> = LanguageConstant;
const langCode = localStorage.getItem('language') ?? 'en';

export const navItems: INavData[] = [
  {
    name: langData[langCode]['DASHBOARD'],
    url: '/management/dashboard',
    iconComponent: { name: 'cilSpeedometer' }
  },
  {
    title: true,
    name: langData[langCode]['CORE']
  },
  {
    name: langData[langCode]['CATEGORIES'],
    url: '/management/categories',
    iconComponent: { name: 'cilGrid' },
    children: [
      {
        name: langData[langCode]['FACULTY'],
        url: '/management/categories/faculty',
        iconComponent: { name: 'cilInstitution' },
      },
      {
        name: langData[langCode]['INDUSTRY'],
        url: '/management/categories/industry',
        iconComponent: { name: 'cilSitemap' },
      },
      {
        name: langData[langCode]['PROGRAM'],
        url: '/management/categories/program',
        iconComponent: { name: 'cilBook' },
      },
    ]
  },
  {
    name: langData[langCode]['USER_ACCOUNT'],
    url: '/management/users',
    iconComponent: { name: 'cilGroup' },
    children: [
      {
        name: langData[langCode]['STUDENT'],
        url: '/management/users/student',
        iconComponent: { name: 'cilEducation' },
      },
      {
        name: langData[langCode]['UNIVERSITY'],
        url: '/management/users/university',
        iconComponent: { name: 'cilInstitution' },
      },
      {
        name: langData[langCode]['COMPANY'],
        url: '/management/users/company',
        iconComponent: { name: 'cilFactory' },
      },
      {
        name: langData[langCode]['ADMIN'],
        url: '/management/users/administrator',
        iconComponent: { name: 'cilUser' },
      },
    ]
  },
  {
    title: true,
    name: langData[langCode]['FUNCTIONS']
  },
  {
    name: langData[langCode]['APPROVE_STUDENT'],
    url: '/management/users/student/approve',
    iconComponent: { name: 'cilCheck' }
  },
];
