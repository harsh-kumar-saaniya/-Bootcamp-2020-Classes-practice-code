import React from 'react';
import { graphql } from 'gatsby';

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      <div>{data.allContentfulFirstSpace.edges[0].node.title}</div>
      <div>{data.allContentfulFirstSpace.edges[0].node.blogDescription.blogDescription}</div>
      <div>{data.allContentfulFirstSpace.edges[0].node.publicationDate}</div>

      <h2>Another Blog</h2>
      <div>{data.allContentfulFirstSpace.edges[1].node.title}</div>
      <div>{data.allContentfulFirstSpace.edges[0].node.blogDescription.blogDescription}</div>
      <div>{data.allContentfulFirstSpace.edges[0].node.publicationDate}</div>
    </div>
  );
}


export const query = graphql`
  query {
    allContentfulFirstSpace {
      edges {
        node {
          title
          blogDescription {
            blogDescription
            content {
              content {
                value
              }
            }
          }
          publicationDate
        }
      }
    }
  }

`