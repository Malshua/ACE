const DEPLOYMENT_LEVEL = process.env.DEPLOYMENT_LEVEL;

console.log(`The current environment is ${DEPLOYMENT_LEVEL}`);

const internalRoutes = {
  HOME: '/',
  ABOUT: '/#about',
  FEATURES: '/#features',
};

const navRoutes = [
  { label: 'About ACE', link: internalRoutes.FEATURES },
  { label: 'Our Misson', link: internalRoutes.ABOUT },
];

const footerRoutes = [{ label: 'Features', link: internalRoutes.FEATURES }];

export const documentationRoutes = [
  { label: 'Membership', link: '/documentation/membership' },
  { label: 'Contribution', link: '/documentation/contribution' },
  { label: 'Loan', link: '/documentation/loan' },
  { label: 'Savings', link: '/documentation/savings' },
  { label: 'Subscription', link: '/documentation/subscription' },
  { label: 'Withdrawal', link: '/documentation/withdrawal' },
  { label: 'Agent Portal', link: '/documentation/agentportal' },
  { label: 'Accounting', link: '/documentation/accounting' },
];

export { internalRoutes, navRoutes, footerRoutes };
