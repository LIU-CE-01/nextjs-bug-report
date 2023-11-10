/** @type {import("next").NextConfig} */
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  worker-src 'self' blob:;
  style-src 'self' 'unsafe-inline' https://heapanalytics.com;
  font-src 'self';
  object-src 'none';
  img-src 'self';
  connect-src 'self';
`;

const securityHeaders = [
{
  key: "Strict-Transport-Security",
  value: "max-age=63072000; includeSubDomains; preload",
},
];

securityHeaders.push({
  key: "Content-Security-Policy",
  value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
});

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  i18n: {
    locales: ['en-US', 'fr', 'nl-NL'],
    defaultLocale: 'en-US',
  },
  
}

module.exports = nextConfig
