import Link from '@components/ui/link';
import { ROUTES } from '@lib/routes';
import { useTranslation } from 'next-i18next';

const headerLinks = [
  { href: ROUTES.SHOPS, icon: null, label: 'Wizard' },
  { href: ROUTES.OFFERS, icon: null, label: 'New' },
  { href: ROUTES.HELP, label: 'Used' },
  { href: ROUTES.CONTACT, label: 'Aftersales' },
  { href: ROUTES.CONTACT, label: 'Contact' },
];

const StaticMenu = () => {
  const { t } = useTranslation('common');

  return (
    <>
      {headerLinks.map(({ href, label, icon }) => (
        <li key={`${href}${label}`}>
          <Link
            href={href}
            className="font-normal text-heading flex items-center transition duration-200 no-underline hover:text-accent focus:text-accent"
          >
            {icon && <span className="me-2">{icon}</span>}
            {t(label)}
          </Link>
        </li>
      ))}
    </>
  );
};

export default StaticMenu;
