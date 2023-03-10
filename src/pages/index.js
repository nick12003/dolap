import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
// import getConfig from 'next/config';
import classNames from 'classnames';

import CenterWrapper from '@/components/CenterWrapper';
import Button from '@/components/Button';
import ProductCard from '@/components/ProductCard';
import products from '@/dataBase';

export const getStaticProps = async ({ locale }) => {
  // const {
  //   publicRuntimeConfig: { API_URL },
  // } = getConfig();

  // const res = await fetch(`${API_URL}/products`);
  // const products = await res.json();

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      products,
    },
  };
};

const Section = ({ children, className, ...rest }) => (
  <CenterWrapper className={classNames('w-full max-w-[1280px] px-6', className)} {...rest}>
    {children}
  </CenterWrapper>
);

export default function Home({ products }) {
  const { t } = useTranslation(['common']);
  const { locale, push } = useRouter();

  return (
    <CenterWrapper direction="vertical">
      <CenterWrapper
        element={<section />}
        className="h-[500px] w-full bg-primary-light dark:bg-gray-700"
      >
        <CenterWrapper className="h-full w-full px-6 max-w-[1280px] relative">
          <div className="h-[80%] w-1/2 max-w-xl absolute right-[1.5rem]">
            <div className="absolute bg-[url('https://drive.google.com/uc?export=view&id=1P4M6EUY7sKA7IbNBBXu02p7ht5ondG9j')] bg-contain bg-no-repeat opacity-70 w-[350px] h-[350px]" />
            <div className="max-w-xs absolute right-0 bottom-0">
              <h6 className="text-lg font-semibold text-right">{t('PopularDescTitle')}</h6>
              <p className="text-gray-700/60 dark:text-gray-300">{t('PopularDesc')}</p>
            </div>
          </div>
          <div className="w-full z-10">
            <h6 className="text-lg font-semibold">{t('Cactus')}</h6>
            <h3 className="text-3xl md:text-5xl font-fat">{t('North_America')}</h3>
            <h1 className="text-5xl md:text-8xl font-fat mt-2 text-white">
              {t('Lophophora_fricii')}
            </h1>
            <div className="mt-12 select-none">
              <Button
                className="px-6 py-4"
                primary
                onClick={() => {
                  push('/product/1');
                }}
              >
                {t('BuyPopular')}
              </Button>
            </div>
          </div>
        </CenterWrapper>
      </CenterWrapper>
      <Section className="py-8" direction="vertical">
        <CenterWrapper className="my-2" direction="vertical">
          <h2 className="my-2 text-4xl font-fat">{t('ProductsTitle')}</h2>
          <p className="text-gray-700/60 dark:text-gray-300">{t('ProductsDesc')}</p>
        </CenterWrapper>
        <div className="w-full my-4 grid justify-between grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
          {products.map(({ pid, imgUrl, ...other }) => (
            <ProductCard
              key={pid}
              className="p-2"
              imgUrl={imgUrl}
              href={`/product/${pid}`}
              {...other[locale]}
            />
          ))}
        </div>
      </Section>
    </CenterWrapper>
  );
}
