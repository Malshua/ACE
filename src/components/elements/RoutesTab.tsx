import Link from 'next/link';
import { useRouter } from 'next/router';

interface TabProps {
  data: { id: number; name: string }[];
}

interface TabMenuProp {
  label: string;
  href: string;
}

const TabMenu: React.FC<TabMenuProp> = ({ label, href }) => {
  const route = useRouter();

  const currentLocation = route?.asPath;

  return (
    <div
      className={`mr-3 px-4 py-3 text-sm all__trans cursor-pointer whitespace-nowrap ${
        currentLocation === href
          ? 'text-secondary-default border-b-2 border-secondary-default font-semibold'
          : 'hover:text-secondary-default hover:-translate-y-1 text-gray-700'
      }`}
    >
      <Link href={href}>{label}</Link>
    </div>
  );
};

const RoutesTab: React.FC<TabProps> = ({ data }) => {
  return (
    <>
      <nav className="flex gap-5 w-full overflow-x-auto border-b border-gray-300">
        {data &&
          data.map((item: any) => (
            <div key={item.id}>
              <TabMenu href={item.href} label={item.name} />
            </div>
          ))}
      </nav>
    </>
  );
};

export default RoutesTab;
