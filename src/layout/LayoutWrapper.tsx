import { DefaultLayout, StrippedLayout } from './layouts';

const layouts: any = {
  default: DefaultLayout,
  stripped: StrippedLayout,
};

const LayoutWrapper = ({ children, ...other }: any) => {
  const Layout = layouts[children.type.layout];

  if (Layout != null) {
    return <Layout {...other}>{children}</Layout>;
  }

  return <DefaultLayout {...other}>{children}</DefaultLayout>;
};

export default LayoutWrapper;
