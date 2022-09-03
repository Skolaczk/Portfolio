import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useData } from '../../hooks/useData';

export const SEO = ({ title, description }) => {
  const { site } = useData();
  const {
    title: defaultTitle,
    description: defaultDescription,
    author,
    keywords,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    author,
    keywords,
  };

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
    >
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
      <meta name='keywords' content={seo.keywords} />
      <meta name='author' content={seo.author} />
    </Helmet>
  );
};

SEO.defaultProps = {
  title: '',
  description: '',
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
