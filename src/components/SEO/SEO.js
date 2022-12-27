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
    googleSiteVerification,
    siteUrl,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    type: 'website',
    image: 'src/assets/icons/logo.svg',
    twitterCard: 'summary_large_image',
    author,
    keywords,
    googleSiteVerification,
    siteUrl,
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
      <meta property='og:type' content={seo.type} />
      <meta property='og:image' content={seo.image} />
      <meta property='og:title' content={seo.title} />
      <meta property='og:description' content={seo.description} />
      <meta property='og:url' content={seo.siteUrl} />
      <meta name='twitter:card' content={seo.twitterCard} />
      <meta name='twitter:creator' content={seo.author} />
      <meta name='twitter:title' content={seo.title} />
      <meta name='twitter:description' content={seo.description} />
      <meta
        name='google-site-verification'
        content={seo.googleSiteVerification}
      />
      <script type='application/ld+json'>
        {`
        {
          "@context": "https://schema.org",
          "@type": "${seo.type}",
          "url": "${seo.siteUrl}",
          "name": "${seo.title}",
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "skolakmichal1@gmail.com",
            "contactType": "User Support"
          }
        }
      `}
      </script>
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
