import { graphql, useStaticQuery } from 'gatsby';

export const useData = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulTechnologies(sort: {fields: icon___createdAt}) {
        nodes {
          id
          name
          icon {
            url
          }
        }
      }
      allContentfulTools(sort: {fields: icon___createdAt}) {
        nodes {
          id
          name
          icon {
            url
          }
        }
      }
      allContentfulProjects {
        nodes {
          id
          title
          technologies
          description {
            description
          }
          image {
            url
          }
          previewLink
          githubLink
        }
      }
    }
  `);

  return data;
};
