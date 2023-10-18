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
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage bookings.', 'Create reviews.', 'Create reports.', 'Edit personal info.'],
  ownerAbilities: [
    'Manage company information',
    'Manage cars in the company',
    'View and manage bookings',
    'View and manage reviews and reports',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/d51b0858-0914-445d-b231-ca58b94bc709',
};
