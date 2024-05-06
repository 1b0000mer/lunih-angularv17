import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'DASHBOARD',
    url: '/management/dashboard',
    iconComponent: { name: 'cilSpeedometer' }
  },
  {
    title: true,
    name: 'CORE'
  },
  {
    name: 'CATEGORIES',
    url: '/management/categories',
    iconComponent: { name: 'cilGrid' },
    children: [
      {
        name: 'FACULTY',
        url: '/management/categories/faculty',
        iconComponent: { name: 'cilInstitution' },
      },
      {
        name: 'INDUSTRY',
        url: '/management/categories/industry',
        iconComponent: { name: 'cilSitemap' },
      },
      {
        name: 'PROGRAM',
        url: '/management/categories/program',
        iconComponent: { name: 'cilBook' },
      },
    ]
  },
  {
    name: 'USER_ACCOUNT',
    url: '/management/users',
    iconComponent: { name: 'cilGroup' },
    children: [
      {
        name: 'STUDENT',
        url: '/management/users/student',
        iconComponent: { name: 'cilEducation' },
      },
      {
        name: 'UNIVERSITY',
        url: '/management/users/university',
        iconComponent: { name: 'cilInstitution' },
      },
      {
        name: 'COMPANY',
        url: '/management/users/company',
        iconComponent: { name: 'cilFactory' },
      },
      {
        name: 'ADMIN',
        url: '/management/users/administrator',
        iconComponent: { name: 'cilUser' },
      },
    ]
  },
  {
    title: true,
    name: 'FUNCTIONS'
  },
  {
    name: 'APPROVE_STUDENT',
    url: '/management/users/student/approve',
    iconComponent: { name: 'cilCheck' }
  },
];
