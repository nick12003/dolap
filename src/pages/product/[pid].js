import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import getConfig from 'next/config';
import Link from 'next/link';
import Image from 'next/image';
import { ProductJsonLd } from 'next-seo';
import { toast, Toaster } from 'react-hot-toast';

import CenterWrapper from '@/components/CenterWrapper';
import Quantity from '@/components/Quantity';
import Button from '@/components/Button';
import ProductCard from '@/components/ProductCard';
import { add } from '@/store';
import products from '@/dataBase';

import Back from '@/assets/back.svg';
import Star from '@/assets/star.svg';
import RegStar from '@/assets/reg_star.svg';

export const getStaticPaths = async () => {
  return {
    paths: products.map(({ pid }) => ({ params: { pid: pid.toString() } })),
    fallback: false,
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

const Product = ({ products, product, openCart }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { t } = useTranslation(['common']);
  const { locale } = useRouter();
  const { imgUrl, rating, ...other } = product;
  const { name, desc, price } = other[locale];

  const quantityChange = (value) => {
    setQuantity((preQ) => (preQ + value <= 1 ? 1 : preQ + value));
  };

  return (
    <>
      <ProductJsonLd productName={name} images={[imgUrl]} description={desc} />
      <Toaster />
      <CenterWrapper className="p-4 sm:p-8 md:p-12" direction="vertical">
        <div className="flex flex-col md:flex-row w-full max-w-[1280px] ">
          <div className="min-w-[300px] md:mr-4">
            <Link className="flex w-fit items-center my-2" href="/">
              <Back />
              {t('BackToHome')}
            </Link>
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
            <div className="md:max-h-[320px] overflow-y-auto text-gray-700/60 dark:text-gray-300 my-2">
              {desc.map((text, i) => (
                <p style={{ textIndent: '2rem' }} key={i}>
                  {text}
                </p>
              ))}
            </div>
            <div className="text-xl font-fat my-6">{`${t('Unit')}${price}`}</div>
            <Quantity
              className="w-fit my-8"
              quantity={quantity}
              onMinus={() => {
                quantityChange(-1);
              }}
              onPuls={() => {
                quantityChange(1);
              }}
            />
            <div className="flex items-center select-none">
              <Button
                className="w-40 h-14 mr-10"
                onClick={() => {
                  dispatch(add({ ...product, quantity }));
                  toast.success(`${name} ${t('Added')}`);
                }}
              >
                {t('AddCart')}
              </Button>
              <Button
                primary
                className="w-40 h-14"
                onClick={() => {
                  dispatch(add({ ...product, quantity }));
                  openCart();
                }}
              >
                {t('BuyNow')}
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full max-w-[1280px]">
          <h2 className="my-2 text-4xl font-fat">{t('YouMayLike')}</h2>
          <CenterWrapper className="relative w-full h-[500px] max-w-[1280px] overflow-hidden">
            <div className="flex absolute left-0 animate-marquee hover:animate-paused">
              {products.map(({ pid, imgUrl, ...other }) => (
                <ProductCard
                  key={pid}
                  className="block px-4 w-[200px]"
                  imgUrl={imgUrl}
                  href={`/product/${pid}`}
                  {...other[locale]}
                />
              ))}
            </div>
          </CenterWrapper>
        </div>
      </CenterWrapper>
    </>
  );
};

export default Product;
