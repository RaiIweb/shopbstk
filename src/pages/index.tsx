import Classic from '@components/layouts/classic';
import { getLayout } from '@components/layouts/layout';
export { getStaticProps } from '@framework/ssr/common';

export default function HomePage() {
  return <Classic />;
}

HomePage.getLayout = getLayout;