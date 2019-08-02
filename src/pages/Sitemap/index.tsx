import { NextContext } from 'next';
import getConfig from 'next/config';
import { comicApi } from 'src/services/comicApi';
import { getPrismicClient } from 'src/services/prismicApi';
import Prismic from 'prismic-javascript';

const { publicRuntimeConfig } = getConfig();

const Sitemap = () => null;

interface IProps {
  done: boolean;
}

Sitemap.getInitialProps = async ({ res }: NextContext): Promise<IProps> => {
  const benchmarks = await comicApi.benchmarks();
  const client = await getPrismicClient();
  const response = await client.query(Prismic.Predicates.at('document.type', 'news'), {});
  const news = response.results;

  const content = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${publicRuntimeConfig.frontendURL}</loc>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>${publicRuntimeConfig.frontendURL}about/</loc>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>${publicRuntimeConfig.frontendURL}benchmarks/</loc>
    <changefreq>weekly</changefreq>
  </url>
  ${benchmarks.map((benchmark) => `
    <url>
      <loc>${publicRuntimeConfig.frontendURL}benchmark/${benchmark.id}/</loc>
      <changefreq>weekly</changefreq>
    </url>
  `).join('')}
  ${news.map((newsItem) => `
    <url>
      <loc>${publicRuntimeConfig.frontendURL}news/${newsItem.uid}/</loc>
      <changefreq>weekly</changefreq>
    </url>
  `).join('')}
</urlset>
`;
  if (res) {
    res.setHeader!('Cache-Control', 's-maxage=5, stale-while-revalidate');
    res.setHeader!('Content-Type', 'application/xml');
    res.statusCode = 200;
    res.end!(content);
  }
  return {
    done: true,
  };
};

export default Sitemap;
