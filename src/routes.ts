import NextRoutes from 'next-routes';

// https://github.com/fridays/next-routes#how-to-use
const r = new NextRoutes()
  .add('home',              '/',                    'Home')
  .add('about',             '/about',               'About')
  .add('benchmarks',        '/benchmarks',          'Benchmarks')
  .add('benchmarkDetails',  '/benchmark/:id',       'BenchmarkDetails')
  .add('benchmarkEdit',     '/benchmark/:id/edit',  'BenchmarkEdit')
  .add('news',              '/news/:id',            'News')
  .add('datasets',          '/datasets',            'Datasets')
  .add('datasetDetails',    '/dataset/:id',         'DatasetDetails')
  .add('datasetEdit',       '/dataset/:id/edit',    'DatasetEdit')
  .add('profile',           '/profile',             'Profile')
  .add('submissions',       '/submissions',         'Submissions')
  .add('sitemap',           '/sitemap.xml',         'Sitemap')
;

export default r;
export const { Link, Router } = r;
