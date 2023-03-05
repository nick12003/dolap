import CenterWrapper from '@/components/CenterWrapper';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

const Thanks = () => {
  const { t } = useTranslation(['common']);

  return (
    <CenterWrapper className="p-4 sm:p-8 md:p-12">
      <div className="w-full max-w-[768px]">
        <h1 className="font-fat text-4xl">{t('Thank.Title')}</h1>
        <ul className="my-8">
          <li className="my-6">
            <p>{`${t('Thank.Content1')}`}</p>
          </li>
          <li className="my-6">
            <p>{`${t('Thank.Content2')}`}</p>
          </li>
          <li className="my-6">
            <p>{`${t('Thank.Content3')}`}</p>
          </li>
          <li className="my-6">
            <p>{`${t('Thank.Content4')}`}</p>
          </li>
          <li className="my-6">
            <p>{`${t('Thank.Content5')}`}</p>
          </li>
        </ul>
        <div className="w-full max-w-[1280px]">
          <Image width={880} height={550} src="/og-image.png" alt="Dolap" />
        </div>
      </div>
    </CenterWrapper>
  );
};

export default Thanks;
