import { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { DefaultSeo } from 'next-seo';
import store from '@/store';
import { siteConfigs } from '@/siteConfigs';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start());
    router.events.on('routeChangeComplete', () => NProgress.done());
    router.events.on('routeChangeError', () => NProgress.done());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <DefaultSeo
          titleTemplate={`%s | ${siteConfigs.titleShort}`}
          defaultTitle={siteConfigs.title}
          description={siteConfigs.description}
          canonical={siteConfigs.fqdn}
          openGraph={{
            title: siteConfigs.title,
            description: siteConfigs.description,
            url: siteConfigs.fqdn,
            images: [
              {
                url: siteConfigs.bannerUrl,
              },
            ],
            site_name: siteConfigs.title,
            type: 'website',
          }}
          twitter={{
            handle: siteConfigs.twitterID,
            site: siteConfigs.twitterID,
            cardType: 'summary_large_image',
          }}
          additionalMetaTags={[
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
          ]}
          additionalLinkTags={[
            {
              rel: 'icon',
              href: siteConfigs.logoPath,
            },
          ]}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default appWithTranslation(App);
