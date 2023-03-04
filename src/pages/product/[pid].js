import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import getConfig from 'next/config';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

import CenterWrapper from '@/components/CenterWrapper';
import products from '@/lib/data';

import Star from '@/assets/star.svg';
import RegStar from '@/assets/reg_star.svg';
import Puls from '@/assets/plus.svg';
import Minus from '@/assets/minus.svg';

export const getStaticPaths = async () => {
  return {
    paths: products.map(({ pid }) => ({ params: { pid: pid.toString() } })),
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ locale, params: { pid } }) => {
  const {
    publicRuntimeConfig: { API_URL },
  } = getConfig();
  const res = await fetch(`${API_URL}/products/${pid}`);
  const product = await res.json();
  const res2 = await fetch(`${API_URL}/products`);
  const products = await res2.json();

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      product: product.result,
      products: products.result,
    },
  };
};

const Product = ({ products, product: { imgUrl, rating, ...other } }) => {
  const [quantity, setQuantity] = useState(1);
  const { t } = useTranslation(['common']);
  const { locale } = useRouter();
  const { name, desc, price, unit } = other[locale];

  const quantityChange = (value) => {
    setQuantity((preQ) => (preQ + value <= 1 ? 1 : preQ + value));
  };

  return (
    <CenterWrapper direction="vertical">
      <div className="flex flex-col md:flex-row w-full max-w-[1280px] p-12">
        <div className="min-w-[300px] mr-4">
          <Image
            className="w-full bg-slate-300/50 rounded-xl"
            width={250}
            height={250}
            src={imgUrl}
            alt="product"
          />
        </div>
        <div className="w-full p-4">
          <h4 className="text-3xl font-fat my-2">{name}</h4>
          <CenterWrapper className="my-6 w-fit">
            {Array(rating)
              .fill(true)
              .concat(Array(5 - rating).fill(false))
              .map((r, i) =>
                r ? (
                  <Star className="text-red-500" key={i} />
                ) : (
                  <RegStar className="text-red-500" key={i} />
                )
              )}
            <span className="ml-2">(20)</span>
          </CenterWrapper>
          <div className="font-fat my-2">{`${t('Details')}:`}</div>
          <div className=" md:max-h-[320px] overflow-y-auto text-gray-700/60 dark:text-gray-300 my-2">
            {desc.map((text, i) => (
              <p style={{ textIndent: '2rem' }} key={i}>
                {text}
              </p>
            ))}
          </div>
          <div className="text-xl font-fat my-6">{`${unit}${price}`}</div>
          <div className="flex items-center font-fat my-8 select-none">
            <Minus
              className={classNames('h-6 w-6 mr-4 cursor-pointer', {
                'cursor-not-allowed text-primary/50 dark:text-primary-light/50': quantity <= 1,
              })}
              onClick={() => {
                quantityChange(-1);
              }}
            />
            <CenterWrapper className="border-primary text-2xl h-8 w-8">{quantity}</CenterWrapper>
            <Puls
              className="h-6 w-6 ml-4 cursor-pointer"
              onClick={() => {
                quantityChange(1);
              }}
            />
          </div>
          <div className="flex items-center select-none">
            <Link
              className="flex items-center justify-center w-40 h-14 mr-10 text-xl font-bold border border-primary rounded-lg shadow-lg bg-white text-primary hover:bg-primary hover:text-white"
              href="/"
            >
              {t('AddCart')}
            </Link>
            <Link
              className="flex items-center justify-center w-40 h-14 text-xl font-bold rounded-lg bg-primary text-white shadow-lg hover:bg-primary/90"
              href="/"
            >
              {t('BuyNow')}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full max-w-[1280px] p-12">
        <h2 className="my-2 text-4xl font-fat">You May Also Like</h2>
        <CenterWrapper className="relative w-full h-[500px] max-w-[1280px] overflow-hidden">
          <div className="flex absolute left-0 animate-marquee hover:animate-paused">
            {products.map(({ pid, imgUrl, ...other }, i) => (
              <Link
                key={pid}
                className="block px-4 w-[200px] hover:scale-110  duration-150 cursor-pointer"
                href={`/product/${pid}`}
              >
                <Image
                  className="w-full bg-slate-300/50 rounded-xl"
                  width={250}
                  height={250}
                  src={imgUrl}
                  alt="product"
                />
                <h6 className="font-semibold dark:text-white">{other?.[locale].name}</h6>
                <div className="font-black font-fat">{`${other?.[locale].unit} ${other?.[locale].price}`}</div>
              </Link>
            ))}
          </div>
        </CenterWrapper>
      </div>
    </CenterWrapper>
  );
};

export default Product;
