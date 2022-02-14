import PromotionSlider from '@components/promotions/promotion-slider';
// import ErrorMessage from '@components/ui/error-message';
// import { useGroupQuery } from '@framework/groups/groups.query';
import useHomepage from '@framework/utils/use-homepage';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const PromotionSliders: React.FC = () => {
  const router = useRouter();
  const { homePage } = useHomepage();

  const group = useMemo(
    () => router.query.pages?.[0] ?? homePage?.slug,
    [router.query.pages, homePage]
  );
  // const { error } = useGroupQuery(group?.toString()!);

  const data = [
    {
      id: 902,
      title: 'Covid-19 Updates',
      subtitle: 'with selected items',
      color: '#70C5F8',
      button: {
        text: 'Save Now',
      },
    },
    {
      id: 903,
      title: 'Covid-19 Updates',
      subtitle: 'with selected items',
      color: '#8DCBAA',
      button: {
        text: 'Save Now',
      },
    },
    {
      id: 904,
      title: 'Covid-19 Updates',
      subtitle: 'with selected items',
      color: '#E57FC8',
      button: {
        text: 'Save Now',
      },
    },
    {
      id: 905,
      title: 'Covid-19 Updates',
      subtitle: 'with selected items',
      color: '#FEB36D',
      button: {
        text: 'Save Now',
      },
    },
    {
      id: 906,
      title: 'Covid-19 Updates',
      subtitle: 'with selected items',
      color: '#8DCBAA',
      button: {
        text: 'Save Now',
      },
    },
  ];

  // if (error) return <ErrorMessage message={error.message} />;
  // if (!data?.type?.promotional_sliders) return null;
  return <PromotionSlider sliders={data} />;
};

export default PromotionSliders;
