const path = require('path');

const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules'
);

require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: 'Michał Skolak | Front-end developer | Portfolio',
    description:
      'I am Michał, and it is my portfolio page. I am 16 years old and I have been learning programming for 2 years to become a front-end developer in the future',
    author: 'Michał Skolak',
    keywords: 'Michał Skolak,Front-end developer,Portfolio',
    siteUrl: 'https://michalskolak.netlify.app/',
    googleSiteVerification: 'LC8BEcTgSAYqz7TbnHAq6oPVAYTScpcp-oxAZf-J4Wg',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        failOnError: false,
        rulePaths: [gatsbyRequiredRules],
        stages: ['develop'],
        extensions: ['js', 'jsx'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public'],
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.ACCESS_TOKEN,
        spaceId: process.env.SPACE_ID,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/icons/logo.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        assets: path.join(__dirname, 'src', 'assets'),
        components: path.join(__dirname, 'src', 'components'),
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['source sans pro:400,700'],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/icons/,
        },
      },
    },
  ],
};
