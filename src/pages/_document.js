import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="text-primary dark:text-primary-light bg-white dark:bg-[#333] w-screen max-h-screen overflow-y-auto overflow-x-hidden scrollbar-hide">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
