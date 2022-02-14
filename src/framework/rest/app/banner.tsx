// import { useGroupQuery } from '@framework/groups/groups.query';
// import useHomepage from '@framework/utils/use-homepage';
// import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
// import { useMemo } from 'react';
// const ErrorMessage = dynamic(() => import('@components/ui/error-message'));
const BannerWithSearch = dynamic(
  () => import('@components/banners/banner-with-search')
);
const BannerShort = dynamic(() => import('@components/banners/banner-short'));
const BannerWithoutSlider = dynamic(
  () => import('@components/banners/banner-without-slider')
);

const MAP_BANNER_TO_GROUP: Record<string, any> = {
  classic: BannerWithSearch,
  modern: BannerShort,
  standard: BannerWithSearch,
  minimal: BannerWithoutSlider,
  default: BannerWithSearch,
};

const banners = [
  {
      "id": 12,
      "type_id": 1,
      "title": "Buy A Car Online in 30 Minutes",
      "description": "Get your vehicles delivered at your doorstep all day everyday",
      "image": {
          "id": 907,
          "original": "/car/background.png",
          "thumbnail": "/car/background.png"
      },
      "created_at": "2021-07-17T13:21:55.000000Z",
      "updated_at": "2021-07-17T13:21:55.000000Z"
  }
]

const Banner: React.FC<{ layout: string }> = ({ layout }) => {
  // const router = useRouter();
  // const { homePage } = useHomepage();
  // const group = useMemo(
  //   () => router.query.pages?.[0] ?? homePage?.slug,
  //   [router.query.pages, homePage]
  // );
  // const {error } = useGroupQuery(group?.toString()!);

  // if (error) return <ErrorMessage message={error.message} />;
  const Component = layout
    ? MAP_BANNER_TO_GROUP[layout]
    : MAP_BANNER_TO_GROUP['default'];
  return <Component banners={banners} layout={layout} />;
};

export default Banner;