// Template for displaying individual case-study content

import React from 'react';
import { graphql } from 'gatsby';

import GeneralLayout from './../components/layouts/GeneralLayout';

export default function Template({data}) {
  const{ markdownRemark } = data;
  const{ frontmatter, html } = markdownRemark;

  return (
    <GeneralLayout
      heroTitle = {frontmatter.title}
      pageTitle = { `CivicActions | ${frontmatter.title}` }
    >
      <p dangerouslySetInnerHTML = {{ __html: html}} />
    </GeneralLayout>
  );
};

// Query case study content
export const studyQuery = graphql `
  query StudyByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } } ) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;