interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'HR Manager', 'Employee', 'Administrator', 'Applicant'],
  tenantName: 'Company',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read employee details',
    'Read department details',
    'Read job position details',
  ],
  ownerAbilities: [
    'Manage job positions',
    'Manage attendance records',
    'Manage salary structures',
    'Manage departments',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/41d3021f-9c50-4c35-87b2-432f58037270',
};
