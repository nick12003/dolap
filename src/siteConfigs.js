function getSiteUrl() {
  if (process.env.VERCEL) {
    return `${process.env.VERCEL_URL}`;
  }
  return process.env.API_URL;
}

const fqdn = getSiteUrl();
const logoPath = '/logo.png';
const bannerPath = '/og-image.png';

export const siteConfigs = {
  title: 'dolap, the cactus specialty store',
  titleShort: 'dolap',
  description: "The world's largest cactus specialty store sells every variety you can think of.",
  author: 'Nick Chen',
  fqdn: fqdn,
  logoPath: logoPath,
  logoUrl: fqdn + logoPath,
  bannerPath: bannerPath,
  bannerUrl: fqdn + bannerPath,
  twitterID: '@NickChen',
  datePublished: '2023-03-01',
};
