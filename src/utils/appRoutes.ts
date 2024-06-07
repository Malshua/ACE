const DEPLOYMENT_LEVEL = process.env.DEPLOYMENT_LEVEL;

console.log(`The current environment is ${DEPLOYMENT_LEVEL}`);

const internalRoutes = {
  HOME: '/',
  ABOUT: '/#about',
  FEATURES: '/#features',
};

const externalRoutes =
  DEPLOYMENT_LEVEL === 'development'
    ? {
        THIRD_PARTY_SIGN_UP:
          'https://akilaah-organization.vercel.app/docs/register',
        THIRD_PARTY_DOCS: 'https://akilaah-organization.vercel.app/docs',
        ORG_SIGN_UP: 'https://akilaah-organization.vercel.app/sign-up',
        MEMBER_SIGN_UP: 'https://akilaah-member.vercel.app/sign-up',
        ORG_LOGIN: 'https://akilaah-organization.vercel.app/login',
        MEMBER_LOGIN: 'https://akilaah-member.vercel.app/login',
        AGENT_LOGIN: 'https://akilaah-agent.vercel.app/login',
        AGENT_SIGN_UP: 'https://akilaah-agent.vercel.app/sign-up',
        SPONSOR_SIGN_UP: 'https://akilaah-sponsor.vercel.app/sign-up',
        BENEFICIARY_SIGN_UP: 'https://akilaah-beneficiary.vercel.app/sign-up ',
      }
    : {
        THIRD_PARTY_SIGN_UP: 'https://organization.akilaah.com/docs/register',
        THIRD_PARTY_DOCS: 'https://organization.akilaah.com/docs',
        ORG_SIGN_UP: 'https://organization.akilaah.com/sign-up',
        MEMBER_SIGN_UP: 'https://member.akilaah.com/sign-up',
        ORG_LOGIN: 'https://organization.akilaah.com/login',
        MEMBER_LOGIN: 'https://member.akilaah.com/login',
        AGENT_LOGIN: 'https://agent.akilaah.com/login',
        AGENT_SIGN_UP: 'https://agent.akilaah.com/sign-up',
        SPONSOR_SIGN_UP: 'https://akilaah-sponsor.vercel.app/sign-up',
        BENEFICIARY_SIGN_UP: 'https://akilaah-beneficiary.vercel.app/sign-up',
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

export { internalRoutes, externalRoutes, navRoutes, footerRoutes };
