import * as React from 'react';
import { Link } from 'gatsby';
import { StyledLink } from '../components/Link/Link.styles';
import { Wrapper } from '../assets/styles/pages/404.styles';
import { SEO } from '../components/SEO/SEO';

const NotFoundPage = () => {
  return (
    <Wrapper>
      <h1>Page Not Found</h1>
      <p>
        The page you were looking for could not be found. It might have been
        removed, renamed, or did not exist in first place.
      </p>
      <StyledLink as={Link} to='/'>
        Go back
      </StyledLink>
    </Wrapper>
  );
};

export const Head = () => (
  <SEO
    title='404 - Not found page'
    description='The page you were looking for could not be found. It might have been
    removed, renamed, or did not exist in first place.'
  />
);

export default NotFoundPage;
