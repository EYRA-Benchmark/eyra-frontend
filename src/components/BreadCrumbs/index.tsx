import React from 'react';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export interface IBreadCrumb {
  id: string;
  name: string;
}

const baseURL = publicRuntimeConfig.frontendURL;

interface IProps {
  crumbs: IBreadCrumb[];
}

const BreadCrumbs = (props: IProps) => {
  const baseCrumb: IBreadCrumb = {
    id: '',
    name: 'EYRA Benchmark Platform',
  };

  const structuredData = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [baseCrumb, ...props.crumbs].map((crumb, idx) => ({
      '@type': 'ListItem',
      'position': idx + 1,
      'item': {
        '@id': baseURL + crumb.id,
        'name': crumb.name,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
    />
  );
};

export default BreadCrumbs;
