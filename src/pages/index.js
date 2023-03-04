import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

import CenterWrapper from '@/components/CenterWrapper';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

const Section = ({ children, className, ...rest }) => (
  <CenterWrapper className={classNames('w-full max-w-[1280px] px-6', className)} {...rest}>
    {children}
  </CenterWrapper>
);

export default function Home() {
  const { t } = useTranslation(['common']);
  return (
    <CenterWrapper direction="vertical">
      <CenterWrapper
        element={<section />}
        className="h-[500px] w-full bg-primary-light dark:bg-gray-700"
      >
        <CenterWrapper className="h-full w-full px-6 max-w-[1280px] relative">
          <div className="h-[80%] w-1/2 max-w-xl absolute right-[1.5rem]">
            <div className="absolute bg-[url('https://drive.google.com/uc?export=view&id=1sQhooFiwFj37WN58OoZGPQEgKuiHQ6F0')] bg-contain bg-no-repeat opacity-70 w-[350px] h-[350px]" />
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
              <Link className="p-4 rounded-xl bg-primary text-white hover:bg-primary/50" href="">
                {t('BuyPopular')}
              </Link>
            </div>
          </div>
        </CenterWrapper>
      </CenterWrapper>
      <Section className="py-8" direction="vertical">
        <CenterWrapper className="my-2" direction="vertical">
          <h2 className="my-2 text-4xl font-fat">我們的產品</h2>
          <p className="text-gray-700/60 dark:text-gray-300">
            本店採用最先進蟲洞技術運送，讓您的商品跟剛從產地回來一樣
          </p>
        </CenterWrapper>
        <div className="w-full my-4 grid justify-between grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
          {Array(10)
            .fill({})
            .map((_, i) => (
              <div
                key={i}
                className="p-2 hover:scale-110 duration-150 cursor-pointer"
                direction="vertical"
              >
                <Image
                  className="w-full bg-slate-300/50 rounded-xl"
                  width={250}
                  height={250}
                  src="https://drive.google.com/uc?export=view&id=1sQhooFiwFj37WN58OoZGPQEgKuiHQ6F0"
                  alt="product"
                />
                <h6 className="font-semibold dark:text-white">淫慾冠</h6>
                <div className="font-black font-fat">$56</div>
              </div>
            ))}
        </div>
      </Section>
    </CenterWrapper>
  );
}
